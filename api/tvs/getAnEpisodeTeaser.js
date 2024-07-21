import fetcher from "../fetcher";

export default async (id, seasonNumber, episodeNumber) =>
	await fetcher(
		`https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}/episode/${episodeNumber}/videos`
	);
