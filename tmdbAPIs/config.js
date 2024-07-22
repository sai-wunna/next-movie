export default (method = "GET") => ({
	method,
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${process.env.TMDB_API_ACCESS_TOKEN}`,
	},
});
