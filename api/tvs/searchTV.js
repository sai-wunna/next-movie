import fetcher from "../fetcher";

export default async (query) =>
	await fetcher(`https://api.themoviedb.org/3/search/tv?${query}`);
