import getATV from "@/tmdbAPIs/tvs/getATV";
import getTVCredits from "@/tmdbAPIs/tvs/getTVCredits";
import Casts from "@/components/Casts";
import Creators from "@/components/Creators";
import { Badge } from "@/components/ui/badge";
import TVSeasonList from "@/components/Lists/TVSeasonList";
import Image from "next/image";
import BusyServer from "@/components/BusyServer";
import getTVTeaser from "@/tmdbAPIs/tvs/getTVTeaser";
import TeaserPlayer from "@/components/TeaserPlayer";
import Reviews from "@/components/Reviews";
import getReviews from "@/tmdbAPIs/general/getReviews";

export default async function page({ params }) {
	const { id } = params;
	const tv = await getATV(id);
	const credits = await getTVCredits(id);
	const teaserData = await getTVTeaser(id);
	const reviews = await getReviews("tv", id, 1);

	return (
		<>
			{tv.error ? (
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
						<div className="md:w-1/3 mb-4 md:mb-0">
							<Image
								src={`https://image.tmdb.org/t/p/original/${tv.poster_path}`}
								alt={tv.name}
								width={800}
								height={750}
								style={{ width: "auto", height: "auto" }}
								className="rounded-lg shadow-xl"
							/>
						</div>
						<div className="md:w-2/3 md:pl-8">
							<h1 className="text-3xl font-bold mb-2">
								{tv.name}
							</h1>
							<p className="text-gray-500 mb-4">{tv.tagline}</p>
							<div className="mb-4">
								<h2 className="text-xl font-bold mb-2">
									Overview
								</h2>
								<p className="indent-10">{tv.overview}</p>
							</div>
							<div className="mb-4">
								<h2 className="text-md font-bold mb-2">
									Genres
								</h2>
								<div className="flex flex-wrap gap-2">
									{tv.genres.map((genre) => (
										<Badge
											key={genre.id}
											className="bg-slate-800 p-1 px-2">
											{genre.name}
										</Badge>
									))}
								</div>
							</div>
							<div className="mb-4">
								<h2 className="text-md font-bold mb-2">
									Product Companies
								</h2>
								<div className="flex flex-wrap gap-2">
									{tv.production_companies.map((company) => (
										<Badge
											key={company.id}
											className="bg-slate-800 p-1 px-2">
											{company.name}
										</Badge>
									))}
								</div>
							</div>
							<div className="mb-4">
								<h2 className="text-xl font-bold mb-2">
									Details
								</h2>
								<ul className="list-disc pl-6">
									<li>
										<small className="me-2">
											First Air Date
										</small>
										{tv.first_air_date}
									</li>
									<li>
										<small className="me-2">
											Last Air Date
										</small>{" "}
										{tv.last_air_date}
									</li>
									<li>
										<small className="me-2">
											Number of Seasons
										</small>{" "}
										{tv.number_of_seasons}
									</li>
									<li>
										<small className="me-2">
											Number of Episodes
										</small>
										{tv.number_of_episodes}
									</li>
									<li>
										<small className="me-2">
											Languages
										</small>
										{tv.spoken_languages
											.map((lang) => lang.name)
											.join(", ")}
									</li>
								</ul>
							</div>
							<Creators creators={tv.created_by} />
						</div>
					</div>
					<Reviews
						reviews={reviews.results}
						moreReviewsRoute={
							reviews.total_pages > 1
								? `/tv/${id}/reviews?page=2`
								: null
						}
					/>
					<TVSeasonList seasons={tv.seasons} tvId={id} />
					<Casts cast={credits.cast} />
				</div>
			)}
		</>
	);
}
