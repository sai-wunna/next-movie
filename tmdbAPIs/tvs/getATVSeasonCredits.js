import fetcher from "../fetcher";

export default async (tvId, seasonId) =>
	await fetcher(
		`https://api.themoviedb.org/3/tv/${tvId}/season/${seasonId}/credits`
	);
