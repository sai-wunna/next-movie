import searchPerson from "@/api/persons/searchPerson";
import BusyServer from "@/components/BusyServer";
import PeopleList from "@/components/Lists/PeopleList";
import Paginator from "@/components/Paginator";

export default async ({ searchParams }) => {
	const { query, include_adult, first_air_date_year, language, page } =
		searchParams;

	let queryData = `query=${query}&language=${language}&include_adult=${include_adult}`;

	if (
		first_air_date_year &&
		decodeURIComponent(first_air_date_year) !== "all time"
	) {
		queryData += `&first_air_date_year=${first_air_date_year}`;
	}

	const result = await searchPerson(`${queryData}&page=${page || 1}`);

	return (
		<>
			{result.error ? (
				<BusyServer />
			) : (
				<>
					<PeopleList people={result.results} />
					<Paginator
						currentPage={result.page}
						totalPages={result.total_pages}
						path={`/search/person?${queryData}&page`}
					/>
				</>
			)}
		</>
	);
};
