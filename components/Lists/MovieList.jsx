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

export const MovieItem = ({ movie }) => (
	<div className="max-w-[250px] bg-white rounded transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl group">
		<div className="relative h-90">
			<Image
				src={`${posterPath}/${movie.poster_path}`}
				alt={movie.original_title || "image"}
				width={342}
				height={513}
				className="w-full h-full  rounded object-contain group-hover:opacity-50 transition-opacity duration-300"
				placeholder="blur"
				blurDataURL={`${posterPath}/${movie.poster_path}?w=10&h=15`}
			/>
			<div className="overflow-hidden absolute top-0 left-0 w-full h-full bg-gradient-to-t bg-opacity-30 backdrop-blur-md from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
				<p className="text-white text-sm leading-relaxed">
					{movie.overview.length > 200
						? `${movie.overview.slice(0, 200)} . . .`
						: movie.overview}
				</p>
			</div>
			<div className="absolute top-0 left-0 bg-white bg-opacity-30 backdrop-blur-md duration-300 text-slate-900 px-4 py-1 rounded-br rounded-tl group-hover:-translate-x-2 group-hover:-translate-y-5">
				<div className="flex items-baseline space-x-2">
					<span className="text-xl font-bold">
						{movie.vote_average.toFixed(1)}
					</span>
					<span className="text-xs">/10</span>
				</div>
			</div>
		</div>
		<div className="pb-2">
			<button className="my-2 w-[100%] pt-2 px-1 active:bg-slate-100">
				<Link href={`/movie/${movie.id}`}>
					{encodeURIComponent(movie.original_title).length > 25 ? (
						<h5 className="text-l font-bold text-gray-900 mb-2 whitespace-nowrap overflow-hidden">
							<span className="inline-block animate-marquee">
								{movie.original_title}
							</span>
						</h5>
					) : (
						<h5 className="text-l font-bold text-gray-900 mb-2">
							{movie.original_title}
						</h5>
					)}
				</Link>
			</button>
			<div className="flex items-center justify-between mb-2 px-2">
				<div className="flex items-center space-x-2">
					<CalendarIcon className="h-5 w-5 text-gray-500" />
					<span className="text-gray-600 text-sm">
						{movie.release_date.slice(0, 4)}
					</span>
				</div>
				<div className="flex items-center space-x-2">
					<FlagIcon className="h-5 w-5 text-gray-500" />
					<span className="text-gray-600 text-sm">
						{movie.original_language.toUpperCase()}
					</span>
				</div>
			</div>
			<div className="flex items-center justify-between px-2 mb-2">
				<div className="flex items-center space-x-2">
					<StarIcon className="h-5 w-5 text-[#ffa500]" />
					<span className="text-gray-600 text-sm">
						{movie.popularity.toFixed(2)}
					</span>
				</div>
				<div className="flex items-center space-x-2">
					<EyeIcon className="h-5 w-5 text-gray-500" />
					<span className="text-gray-600 text-sm">
						{movie.vote_count}
					</span>
				</div>
			</div>
		</div>
	</div>
);

export default function MovieList({ movies }) {
	return (
		<>
			{movies && typeof movies === "object" ? (
				<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center gap-8 p-8">
					{movies.map((movie) => (
						<MovieItem key={movie.id} movie={movie} />
					))}
				</div>
			) : (
				<div className="d-flex my-20 text-center text-red-900">
					No Movies To Show
				</div>
			)}
		</>
	);
}
