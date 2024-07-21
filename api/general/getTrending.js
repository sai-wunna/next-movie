import fetcher from "../fetcher";

export default async (type, page) =>
	await fetcher(
		`https://api.themoviedb.org/3/trending/${type}/day?page=${page}`
	);
