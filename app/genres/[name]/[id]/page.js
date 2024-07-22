import getGenreMovies from "@/tmdbAPIs/movies/getGenreMovies";
import getGenreTV from "@/tmdbAPIs/tvs/getGenreTV";
import BusyServer from "@/components/BusyServer";
import MovieList from "@/components/Lists/MovieList";
import TVList from "@/components/Lists/TVList";
import React from "react";
import Paginator from "@/components/Paginator";

export default async function page({ params, searchParams }) {
	const { name, id } = params;
	const { page } = searchParams;
	const [realName, type] = decodeURIComponent(name).split("__");

	const data =
		type === "movies"
			? await getGenreMovies(id, page)
			: await getGenreTV(id, page);

	return (
		<>
			<h6 className="text-lg font-bold mb-4 pb-2 border-b ps-7">
				{realName}
			</h6>
			{data.error ? (
				<BusyServer />
			) : (
				<>
					{type === "movies" ? (
						<MovieList movies={data.results} />
					) : (
						<TVList tvs={data.results} />
					)}
					<Paginator
						currentPage={data.page}
						totalPages={data.total_pages}
						path={`/genres/${name}/${id}?page`}
					/>
				</>
			)}
		</>
	);
}
