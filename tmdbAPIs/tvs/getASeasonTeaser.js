import fetcher from "../fetcher";

export default async (id, seasonNumber) =>
	await fetcher(
		`https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}/videos`
	);
