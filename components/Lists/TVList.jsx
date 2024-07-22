import React from "react";
import {
	CalendarIcon,
	FlagIcon,
	EyeIcon,
	StarIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import posterPath from "@/app/constants/posterPath";

export const TVItem = ({ tv }) => (
	<div className="bg-white max-w-[250px] rounded transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl group">
		<div className="relative h-90">
			<Image
				src={`${posterPath}/${tv.poster_path}`}
				alt={tv.name || "image"}
				width={342}
				height={513}
				className="w-full h-full rounded object-contain group-hover:opacity-50 transition-opacity duration-300"
				placeholder="blur"
				blurDataURL={`${posterPath}/${tv.poster_path}?w=10&h=15`}
			/>
			<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t bg-opacity-30 backdrop-blur-md from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
				<p className="text-white text-sm leading-relaxed">
					{tv.overview.length > 200
						? `${tv.overview.slice(0, 200)} . . .`
						: tv.overview}
				</p>
			</div>
			<div className="absolute top-0 left-0 bg-white bg-opacity-30 backdrop-blur-md duration-300 text-slate-900 px-4 py-1 rounded-br rounded-tl group-hover:-translate-x-2 group-hover:-translate-y-5">
				<div className="flex items-baseline space-x-2">
					<span className="text-xl font-bold">
						{tv.vote_average.toFixed(1)}
					</span>
					<span className="text-xs">/10</span>
				</div>
			</div>
		</div>
		<div className="pb-2">
			<button className="mb-1 w-[100%] pt-2 px-1 active:bg-slate-100">
				<Link href={`/tv/${tv.id}`}>
					{encodeURIComponent(tv.name).length > 25 ? (
						<h5 className="text-l font-bold text-gray-900 mb-2 whitespace-nowrap overflow-hidden">
							<span className="inline-block animate-marquee">
								{tv.name}
							</span>
						</h5>
					) : (
						<h5 className="text-l font-bold text-gray-900 mb-2">
							{tv.name}
						</h5>
					)}
				</Link>
			</button>
			<div className="flex items-center justify-between mb-2 px-2">
				<div className="flex items-center space-x-2">
					<CalendarIcon className="h-5 w-5 text-gray-500" />
					<span className="text-gray-600 text-sm">
						{tv.first_air_date.slice(0, 4)}
					</span>
				</div>
				<div className="flex items-center space-x-2">
					<FlagIcon className="h-5 w-5 text-gray-500" />
					<span className="text-gray-600 text-sm">
						{tv.original_language.toUpperCase()}
					</span>
				</div>
			</div>
			<div className="flex items-center justify-between px-2 mb-2">
				<div className="flex items-center space-x-2">
					<StarIcon className="h-5 w-5 text-[#ffa500]" />
					<span className="text-gray-600 text-sm">
						{tv.popularity.toFixed(2)}
					</span>
				</div>
				<div className="flex items-center space-x-2">
					<EyeIcon className="h-5 w-5 text-gray-500" />
					<span className="text-gray-600 text-sm">
						{tv.vote_count}
					</span>
				</div>
			</div>
		</div>
	</div>
);

export default function TVList({ tvs }) {
	return (
		<>
			{tvs && typeof tvs === "object" ? (
				<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center gap-8 p-8">
					{tvs.map((tv) => (
						<TVItem tv={tv} key={tv.id} />
					))}
				</div>
			) : (
				<div className="d-flex my-20 text-center text-red-900">
					No tvs To Show
				</div>
			)}
		</>
	);
}
