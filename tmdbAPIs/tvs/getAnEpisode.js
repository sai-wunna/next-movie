import fetcher from "../fetcher";

export default async (tvId, seasonNumber, episodeNumber) =>
	await fetcher(
		`https://api.themoviedb.org/3/tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}`
	);
