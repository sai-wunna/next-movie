import getTVs from "@/tmdbAPIs/tvs/getTVs";
import BusyServer from "@/components/BusyServer";
import TVlList from "@/components/Lists/TVList";
import Paginator from "@/components/Paginator";
import {
	CalendarIcon,
	ClockIcon,
	FireIcon,
	StarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

export default async function page({ searchParams }) {
	const { prefer, page } = searchParams;

	const preference =
		prefer === "popular"
			? "popular"
			: prefer === "airing_today"
			? "airing_today"
			: prefer === "on_the_air"
			? "on_the_air"
			: "top_rated";

	const tvs = await getTVs(preference, page || 1);

	return (
		<>
			<div className="flex justify-center items-center mb-4 pb-4 border-b">
				<div
					className={`relative border-r-2 border-slate-300 px-1 text-${
						prefer === "popular" ? "orange-500" : "blue-500"
					}`}>
					<Link href={`/tv?prefer=popular`}>Popular</Link>
					{prefer === "popular" && (
						<FireIcon className="w-5 h-6 absolute -top-5 left-6" />
					)}
				</div>
				<div
					className={`relative border-r-2 border-slate-300 px-1 text-${
						prefer === "airing_today" ? "orange-500" : "blue-500"
					}`}>
					<Link href={`/tv?prefer=airing_today`}>Today</Link>
					{prefer === "airing_today" && (
						<ClockIcon className="w-5 h-6 absolute -top-5 left-4" />
					)}
				</div>
				<div
					className={`relative border-r-2 border-slate-300 px-1 text-${
						prefer === "top_rated" ? "orange-500" : "blue-500"
					}`}>
					<Link href={`/tv?prefer=top_rated`}>Top Rated</Link>
					{prefer === "top_rated" && (
						<StarIcon className="w-5 h-6 absolute -top-5 left-8" />
					)}
				</div>
				<div
					className={`relative px-1 text-${
						prefer === "on_the_air" ? "orange-500" : "blue-500"
					}`}>
					<Link href={`/tv?prefer=on_the_air`}>On The Air</Link>
					{prefer === "on_the_air" && (
						<CalendarIcon className="w-5 h-6 absolute -top-5 left-8" />
					)}
				</div>
			</div>
			{tvs.error ? (
				<BusyServer />
			) : (
				<>
					<TVlList tvs={tvs.results} />
					<Paginator
						currentPage={tvs.page}
						totalPages={tvs.total_pages}
						path={`/movie?prefer=${preference}&page`}
					/>
				</>
			)}
		</>
	);
}
