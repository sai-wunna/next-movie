import fetcher from "../fetcher";

export default async () =>
	await fetcher("https://api.themoviedb.org/3/genre/tv/list");
