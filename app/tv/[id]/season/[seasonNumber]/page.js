import getATVSeason from "@/tmdbAPIs/tvs/getATVSeason";
import getATVSeasonCredits from "@/tmdbAPIs/tvs/getATVSeasonCredits";
import Casts from "@/components/Casts";
import BusyServer from "@/components/BusyServer";
import Image from "next/image";
import Crew from "@/components/Crew";
import TVSeasonEpisodeList from "@/components/Lists/TVSeasonEpisodeList";
import getASeasonTeaser from "@/tmdbAPIs/tvs/getASeasonTeaser";
import TeaserPlayer from "@/components/TeaserPlayer";

export default async function page({ params }) {
	const { id, seasonNumber } = params;
	const season = await getATVSeason(id, seasonNumber);
	const credits = await getATVSeasonCredits(id, seasonNumber);
	const teaserData = await getASeasonTeaser(id, seasonNumber);

	return (
		<>
			{season.error ? (
				<BusyServer />
			) : (
				<>
					<div className="p-6">
						<div className="flex justify-center flex-wrap mb-5 gap-2">
							{teaserData.results
								.filter((teaser) => teaser.type === "Trailer")
								.map((teaser) => (
									<TeaserPlayer
										teaser={teaser}
										key={teaser.id}
									/>
								))}
						</div>
						<div className="flex flex-col place-items-center md:flex-row md:place-items-end space-x-4">
							<div className="flex-shrink-0">
								<Image
									src={`https://image.tmdb.org/t/p/w500${season.poster_path}`}
									alt={season.name}
									width={800}
									height={750}
									style={{ width: "auto", height: "auto" }}
									className="rounded-lg shadow-lg"
								/>
							</div>
							<div className="my-4">
								<h2 className="text-2xl font-bold">
									{season.name}
								</h2>
								<div className="my-4">
									<h2 className="text-xl font-bold mb-2">
										Overview
									</h2>
									<p className="indent-10">
										{season.overview ||
											`-------------------------------------------------
												-------------------------------------------------`}
									</p>
								</div>
								<p className="text-slate-900">
									<small>Season No : </small>
									{season.season_number}
								</p>
								<p className="text-slate-900">
									<small>Air Date : </small>
									{season.air_date}
								</p>
								<p className="text-slate-900">
									<small>Vote Average: </small>
									{season.vote_average}
									<small> / 10</small>
								</p>
							</div>
						</div>
					</div>
					<TVSeasonEpisodeList
						tvId={id}
						seasonNumber={seasonNumber}
						episodes={season.episodes}
					/>
					<div className="container mx-auto py-8">
						<Casts cast={credits.cast} />
						<Crew crew={credits.crew} />
					</div>
				</>
			)}
		</>
	);
}
