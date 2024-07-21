import getMovies from "@/api/movies/getMovies";
import BusyServer from "@/components/BusyServer";
import MovieList from "@/components/Lists/MovieList";
import Paginator from "@/components/Paginator";
import {
	CalendarIcon,
	FireIcon,
	PlayIcon,
	StarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

export default async function page({ searchParams }) {
	const { prefer, page } = searchParams;

	const preference =
		prefer === "popular"
			? "popular"
			: prefer === "now_playing"
			? "now_playing"
			: prefer === "top_rated"
			? "top_rated"
			: "upcoming";

	const movies = await getMovies(preference, page || 1);

	return (
		<>
			<div className="flex justify-center items-center mb-4 pb-4 border-b">
				<div
					className={`relative border-r-2 border-slate-300 px-1 text-${
						prefer === "popular" ? "orange-500" : "blue-500"
					}`}>
					<Link href={`/movie?prefer=popular`}>Popular</Link>
					{prefer === "popular" && (
						<FireIcon className="w-5 h-6 absolute -top-5 left-6" />
					)}
				</div>
				<div
					className={`relative border-r-2 border-slate-300 px-1 text-${
						prefer === "now_playing" ? "orange-500" : "blue-500"
					}`}>
					<Link href={`/movie?prefer=now_playing`}>Playing</Link>
					{prefer === "now_playing" && (
						<PlayIcon className="w-5 h-6 absolute -top-5 left-6" />
					)}
				</div>
				<div
					className={`relative border-r-2 border-slate-300 px-1 text-${
						prefer === "top_rated" ? "orange-500" : "blue-500"
					}`}>
					<Link href={`/movie?prefer=top_rated`}>Top Rated</Link>
					{prefer === "top_rated" && (
						<StarIcon className="w-5 h-6 absolute -top-5 left-8" />
					)}
				</div>
				<div
					className={`relative px-1 text-${
						prefer === "upcoming" ? "orange-500" : "blue-500"
					}`}>
					<Link href={`/movie?prefer=upcoming`}>Upcoming</Link>
					{prefer === "upcoming" && (
						<CalendarIcon className="w-5 h-6 absolute -top-5 left-8" />
					)}
				</div>
			</div>
			{movies.error ? (
				<BusyServer />
			) : (
				<>
					<MovieList movies={movies.results} />
					<Paginator
						currentPage={movies.page}
						totalPages={movies.total_pages}
						path={`/movie?prefer=${preference}&page`}
					/>
				</>
			)}
		</>
	);
}
