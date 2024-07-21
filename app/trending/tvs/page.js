import getTrending from "@/api/general/getTrending";
import BusyServer from "@/components/BusyServer";
import TVList from "@/components/Lists/TVList";
import Paginator from "@/components/Paginator";
import TrendingNavigator from "@/components/TrendingNavigator";
import React from "react";

export default async ({ searchParams }) => {
	const { page } = searchParams;
	const trendingTVs = await getTrending("tv", page || 1);

	return (
		<>
			<TrendingNavigator path={"tvs"} />
			{trendingTVs.error ? (
				<BusyServer />
			) : (
				<>
					<TVList tvs={trendingTVs.results} />
					<Paginator
						currentPage={trendingTVs.page}
						totalPages={trendingTVs.total_pages}
						path={`/trending/tvs?page`}
					/>
				</>
			)}
		</>
	);
};
