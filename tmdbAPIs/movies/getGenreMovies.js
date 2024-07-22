import fetcher from "../fetcher";

export default async (id, page) =>
	await fetcher(
		`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&page=${
			page || 1
		}`
	);
