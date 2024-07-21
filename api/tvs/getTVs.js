import fetcher from "../fetcher";

export default async (prefer, page) =>
	await fetcher(`https://api.themoviedb.org/3/tv/${prefer}?page=${page}`);
