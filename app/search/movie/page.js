import searchMovie from "@/api/movies/searchMovie";
import BusyServer from "@/components/BusyServer";
import MovieList from "@/components/Lists/MovieList";
import Paginator from "@/components/Paginator";

export default async function page({ searchParams }) {
	const { query, include_adult, primary_release_year, language, page } =
		searchParams;

	let queryData = `query=${query}&language=${language}&include_adult=${include_adult}`;

	if (
		primary_release_year &&
		decodeURIComponent(primary_release_year) !== "all time"
	) {
		queryData += `&primary_release_year=${primary_release_year}`;
	}

	const result = await searchMovie(`${queryData}&page=${page || 1}`);

	return (
		<>
			{result.error ? (
				<BusyServer />
			) : (
				<>
					<MovieList movies={result.results} />
					<Paginator
						currentPage={result.page}
						totalPages={result.total_pages}
						path={`/search/movie?${queryData}&page`}
					/>
				</>
			)}
		</>
	);
}
