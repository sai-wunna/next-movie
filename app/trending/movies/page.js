import getTrending from "@/api/general/getTrending";
import BusyServer from "@/components/BusyServer";
import MovieList from "@/components/Lists/MovieList";
import Paginator from "@/components/Paginator";
import TrendingNavigator from "@/components/TrendingNavigator";
import React from "react";

export default async function page({ searchParams }) {
	const { page } = searchParams;
	const trendingMovies = await getTrending("movie", page || 1);

	return (
		<>
			<TrendingNavigator path={"movies"} />
			{trendingMovies.error ? (
				<BusyServer />
			) : (
				<>
					<MovieList movies={trendingMovies.results} />
					<Paginator
						currentPage={trendingMovies.page}
						totalPages={trendingMovies.total_pages}
						path={`/trending/movies?page`}
					/>
				</>
			)}
		</>
	);
}
