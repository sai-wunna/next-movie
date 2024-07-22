import fetcher from "../fetcher";

export default async (id) =>
	await fetcher(`
https://api.themoviedb.org/3/person/${id}/tv_credits`);
