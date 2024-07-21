import getAPerson from "@/api/persons/getAPerson";
import getAPersonMovieCredits from "@/api/persons/getAPersonMovieCredits";
import getAPersonTVCredits from "@/api/persons/getAPersonTVCredits";
import MovieList from "@/components/Lists/MovieList";
import TVList from "@/components/Lists/TVList";
import React from "react";
import Image from "next/image";
import BusyServer from "@/components/BusyServer";

export default async function page({ params }) {
	const { id } = params;
	const person = await getAPerson(id);
	const movies = await getAPersonMovieCredits(id);
	const tvs = await getAPersonTVCredits(id);

	return (
		<div className="container mx-auto p-6">
			{person.error ? (
				<BusyServer />
			) : (
				<>
					<div className="flex flex-col md:flex-row items-start">
						<Image
							alt={person.name}
							width={300}
							height={300}
							style={{
								width: "auto",
								height: "auto",
								boxShadow: "10px 10px 0 0 silver",
								transform: "rotate(1deg)",
								scale: 0.9,
							}}
							className="rounded-lg shadow-lg"
							src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
						/>
						<div className="ml-6">
							<h1 className="text-3xl font-bold text-gray-800 my-6">
								{person.name}
							</h1>
						</div>
					</div>
					<h2 className="p-4 border-b">Movies</h2>
					<MovieList movies={movies.cast} />
					<h2 className="p-4 border-b">TVs</h2>
					<TVList tvs={tvs.cast} />
				</>
			)}
		</div>
	);
}
