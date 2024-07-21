import getAnEpisode from "@/api/tvs/getAnEpisode";
import getAnEpisodeTeaser from "@/api/tvs/getAnEpisodeTeaser";
import BusyServer from "@/components/BusyServer";
import Casts from "@/components/Casts";
import Crew from "@/components/Crew";
import TeaserPlayer from "@/components/TeaserPlayer";
import Image from "next/image";
import React from "react";

export default async ({ params }) => {
	const { id, seasonNumber, episodeNumber } = params;

	const episode = await getAnEpisode(id, seasonNumber, episodeNumber);
	const teaserData = await getAnEpisodeTeaser(
		id,
		seasonNumber,
		episodeNumber
	);

	return (
		<>
			{episode.error ? (
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
									src={`https://image.tmdb.org/t/p/w500${episode.still_path}`}
									alt={episode.name}
									width={800}
									height={750}
									style={{ width: "auto", height: "auto" }}
									className="rounded-lg shadow-lg"
								/>
							</div>
							<div className="my-4">
								<h2 className="text-2xl font-bold">
									{episode.name}
								</h2>
								<div className="my-4">
									<h2 className="text-xl font-bold mb-2">
										Overview
									</h2>
									<p className="indent-10">
										{episode.overview ||
											`-------------------------------------------------
												-------------------------------------------------`}
									</p>
								</div>
								<p className="text-slate-900">
									<small>Season No : </small>
									{episode.season_number}
								</p>
								<p className="text-slate-900">
									<small>Episode No : </small>
									{episode.episode_number}
								</p>
								<p className="text-slate-900">
									<small>Air Date : </small>
									{episode.air_date}
								</p>
								<p className="text-slate-900">
									<small>Vote Average: </small>
									{episode.vote_average}
									<small> / 10</small>
								</p>
							</div>
						</div>
					</div>
					<Casts cast={episode.guest_stars} />
					<Crew crew={episode.crew} />
				</>
			)}
		</>
	);
};
