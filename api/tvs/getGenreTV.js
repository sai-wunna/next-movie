import fetcher from "../fetcher";

export default async (id, page) =>
	await fetcher(
		`https://api.themoviedb.org/3/discover/tv?with_genres=${id}&page=${
			page || 1
		}`
	);
