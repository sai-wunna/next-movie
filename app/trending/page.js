import getTrending from "@/tmdbAPIs/general/getTrending";
import BusyServer from "@/components/BusyServer";
import MovieList from "@/components/Lists/MovieList";
import PeopleList from "@/components/Lists/PeopleList";
import TrendingNavigator from "@/components/TrendingNavigator";
import TVList from "@/components/Lists/TVList";
import Paginator from "@/components/Paginator";

export default async function page({ searchParams }) {
	const { page } = searchParams;

	const trendingItems = await getTrending("all", page || 1);

	if (trendingItems.error) {
		return <BusyServer />;
	}

	const result = trendingItems.results.reduce(
		(acc, item) => {
			if (item.media_type === "movie") {
				acc.trendingMovies.push(item);
			} else if (item.media_type === "person") {
				acc.trendingPeople.push(item);
			} else {
				acc.trendingTvs.push(item);
			}
			return acc;
		},
		{ trendingMovies: [], trendingPeople: [], trendingTvs: [] }
	);

	const { trendingMovies, trendingPeople, trendingTvs } = result;

	return (
		<>
			<TrendingNavigator path={"all"} />
			<h1 className="px-4 font-bold">Movies</h1>
			<MovieList movies={trendingMovies} />
			<div className="border my-4"></div>
			<h1 className="px-4 font-bold">TVs</h1>
			<TVList tvs={trendingTvs} />
			<div className="border my-4"></div>
			<h1 className="px-4 font-bold">People</h1>
			<PeopleList people={trendingPeople} />
			<Paginator
				currentPage={trendingItems.page}
				totalPages={trendingItems.total_pages}
				path={"/trending?type=all&page"}
			/>
		</>
	);
}
