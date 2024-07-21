import fetcher from "../fetcher";

export default async (type, id, page) =>
	await fetcher(
		`https://api.themoviedb.org/3/${type}/${id}/reviews?page=${page || 1}`
	);
