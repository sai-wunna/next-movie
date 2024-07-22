import getAMovie from "@/tmdbAPIs/movies/getAMovie";
import getAMovieTeaser from "@/tmdbAPIs/movies/getAMovieTeaser";
import getMovieCredits from "@/tmdbAPIs/movies/getMovieCredits";
import BusyServer from "@/components/BusyServer";
import Casts from "@/components/Casts";
import Reviews from "@/components/Reviews";
import TeaserPlayer from "@/components/TeaserPlayer";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import getReviews from "@/tmdbAPIs/general/getReviews";

export default async function page({ params }) {
	const { id } = params;
	const movie = await getAMovie(id);
	const credits = await getMovieCredits(id);
	const teaserData = await getAMovieTeaser(id);
	const reviews = await getReviews("movie", id, 1);

	return (
		<>
			{movie.error ? (
				<BusyServer />
			) : (
				<div className="container mx-auto py-8">
					<div className="flex justify-center flex-wrap mb-5 gap-2">
						{teaserData.results
							.filter((teaser) => teaser.type === "Trailer")
							.map((teaser) => (
								<TeaserPlayer teaser={teaser} key={teaser.id} />
							))}
					</div>
					<div className="flex flex-col md:flex-row">
						<div className="md:w-1/2 mb-4 md:mb-0">
							<Image
								src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
								alt={movie.title}
								width={1000}
								height={750}
								style={{ width: "auto", height: "auto" }}
								className="rounded-lg shadow-xl"
							/>
						</div>
						<div className="md:w-1/2 md:pl-8">
							<h1 className="text-xl font-bold mb-4">
								{movie.title}
							</h1>
							<p className="text-gray-500 mb-4">
								{movie.tagline}
							</p>
							<div className="mb-4">
								<h2 className="text-xl font-bold mb-2">
									Overview
								</h2>
								<p className="indent-10">{movie.overview}</p>
							</div>
							<div className="mb-4">
								<h2 className="text-md font-bold mb-2">
									Genres
								</h2>
								<div className="flex flex-wrap gap-2">
									{movie.genres.map((genre) => (
										<Badge
											key={genre.id}
											className="bg-slate-700 p-1 px-2">
											{genre.name}
										</Badge>
									))}
								</div>
							</div>
							<div className="mb-4">
								<h2 className="text-md font-bold mb-2">
									Details
								</h2>
								<div className="grid grid-cols-2 gap-2">
									<div>
										<small className="font-light">
											Release Date:
										</small>{" "}
										{movie.release_date}
									</div>
									<div>
										<small className="font-light">
											Runtime:
										</small>{" "}
										{movie.runtime} minutes
									</div>
									<div>
										<small className="font-light">
											Budget:
										</small>{" "}
										{movie.budget.toLocaleString("en-US", {
											style: "currency",
											currency: "USD",
										})}
									</div>
									<div>
										<small className="font-light">
											Revenue:
										</small>{" "}
										{movie.revenue.toLocaleString("en-US", {
											style: "currency",
											currency: "USD",
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
					<Reviews
						reviews={reviews.results}
						moreReviewsRoute={
							reviews.total_pages > 1
								? `/movie/${id}/reviews?page=2`
								: null
						}
					/>
					<Casts cast={credits.cast} />
				</div>
			)}
		</>
	);
}
