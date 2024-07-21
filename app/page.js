import {
	ArrowDownTrayIcon,
	ClockIcon,
	FilmIcon,
	FireIcon,
	HeartIcon,
	MagnifyingGlassIcon,
	PlayIcon,
	ShareIcon,
	StarIcon,
	UserIcon,
	VideoCameraIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

export default () => {
	return (
		<div className="relative p-5">
			{/* Background Icons */}
			<FireIcon className="absolute w-[12%] h-[12%] z-10 text-slate-300 top-[14%] left-[90%] translate-x-[-50%] translate-y-[-50%] rotate-[25deg]" />
			<PlayIcon className="absolute w-[12%] h-[12%] z-10 text-slate-300 top-[17%] left-[10%] translate-x-[-50%] translate-y-[-50%] rotate-[-9deg]" />
			<VideoCameraIcon className="absolute w-[12%] h-[12%] z-10 text-slate-300 top-[10%] left-[60%] translate-x-[-50%] translate-y-[-50%] rotate-[-10deg]" />
			<FilmIcon className="absolute w-[12%] h-[12%] z-10 text-slate-300 top-[25%] left-[30%] translate-x-[-50%] translate-y-[-50%] rotate-[5deg]" />
			<StarIcon className="absolute w-[12%] h-[12%] z-10 text-slate-300 top-[45%] left-[80%] translate-x-[-50%] translate-y-[-50%] rotate-[10deg]" />
			<HeartIcon className="absolute w-[12%] h-[12%] z-10 text-slate-300 top-[45%] left-[40%] translate-x-[-50%] translate-y-[-50%] rotate-[15deg]" />
			<UserIcon className="absolute w-[12%] h-[12%] z-10 text-slate-300 top-[60%] left-[60%] translate-x-[-50%] translate-y-[-50%] rotate-[20deg]" />
			<MagnifyingGlassIcon className="absolute w-[12%] h-[12%] z-10 text-slate-300 top-[55%] left-[20%] translate-x-[-50%] translate-y-[-50%] rotate-[25deg]" />
			<ArrowDownTrayIcon className="absolute w-[12%] h-[12%] z-10 text-slate-300 top-[75%] left-[50%] translate-x-[-50%] translate-y-[-50%] rotate-[30deg]" />
			<ShareIcon className="absolute w-[12%] h-[12%] z-10 text-slate-300 top-[80%] left-[15%] translate-x-[-50%] translate-y-[-50%] rotate-[35deg]" />
			<ClockIcon className="absolute w-[12%] h-[12%] z-10 text-slate-300 top-[75%] left-[90%] translate-x-[-50%] translate-y-[-50%] rotate-[40deg]" />
			{/* Main Content */}
			<div className="h-[78vh] flex justify-center items-center w-auto bg-gradient-to-r from-gray-200 to-transparent rounded-tl-3xl rounded-bl-3xl">
				<div className="w-full max-w-md p-4 rounded-lg z-10">
					<div className="bg-moving-text-wrapper mb-4 z-10">
						<h1 className="text-3xl font-bold text-center text-gray-900">
							Movies & TV Series
						</h1>
					</div>
					<div className="flex justify-center mt-4 gap-2 z-10">
						<Link
							href={"/movie?prefer=popular"}
							className="bg-gradient-to-r from-orange-400 to-red-500 hover:scale-105 transition-all text-white px-4 py-2 rounded-md shadow-lg transform hover:shadow-xl">
							Movies
						</Link>
						<Link
							href={"/trending?type=all"}
							className="bg-gradient-to-r from-orange-400 to-red-500 hover:scale-105 transition-all text-white px-4 py-2 rounded-md shadow-lg transform hover:shadow-xl">
							Trending
						</Link>
						<Link
							href={"/tv?prefer=popular"}
							className="bg-gradient-to-r from-orange-400 to-red-500 hover:scale-105 transition-all text-white px-4 py-2 rounded-md shadow-lg transform hover:shadow-xl">
							TVs
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
