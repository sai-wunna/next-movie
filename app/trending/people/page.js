import getTrending from "@/tmdbAPIs/general/getTrending";
import BusyServer from "@/components/BusyServer";
import PeopleList from "@/components/Lists/PeopleList";
import Paginator from "@/components/Paginator";
import TrendingNavigator from "@/components/TrendingNavigator";
import React from "react";

export default async function page({ searchParams }) {
	const { page } = searchParams;
	const trendingPeople = await getTrending("person", page || 1);

	return (
		<>
			<TrendingNavigator path={"people"} />
			{trendingPeople.error ? (
				<BusyServer />
			) : (
				<>
					<PeopleList people={trendingPeople.results} />
					<Paginator
						currentPage={trendingPeople.page}
						totalPages={trendingPeople.total_pages}
						path={`/trending/people?page`}
					/>
				</>
			)}
		</>
	);
}
