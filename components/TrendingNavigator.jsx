import React from "react";
import Link from "next/link";
import { FireIcon } from "@heroicons/react/24/outline";

export default function TrendingNavigator({ path }) {
	return (
		<div className=" mb-4 pb-4 border-b">
			<div className="flex items-center justify-center mb-4">
				<FireIcon className="w-6 h-6 text-orange-600" />
			</div>
			<div className="flex justify-center items-center">
				<div
					className={`relative border-r-2 border-slate-300 px-2 text-${
						path === "all" ? "orange-500" : "slate-900"
					}
					`}>
					<Link href={"/trending?type=all&page=1"}>All</Link>
				</div>
				<div
					className={`relative border-r-2 border-slate-300 px-2 text-${
						path === "movies" ? "orange-500" : "slate-900"
					}`}>
					<Link href={`/trending/movies`}>Movies</Link>
				</div>
				<div
					className={`relative border-r-2 border-slate-300 px-2 text-${
						path === "tvs" ? "orange-500" : "slate-900"
					}`}>
					<Link href={`/trending/tvs`}>TVs</Link>
				</div>
				<div
					className={`relative px-2 text-${
						path === "people" ? "orange-500" : "slate-900"
					}`}>
					<Link href={`/trending/people`}>People</Link>
				</div>
			</div>
		</div>
	);
}
