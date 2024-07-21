import Image from "next/image";
import Link from "next/link";
import {
	CalendarIcon,
	StarIcon,
	FlagIcon,
	ClockIcon,
} from "@heroicons/react/24/outline";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel";

const Episode = ({ episode, tvId }) => {
	return (
		<div className="bg-white rounded transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl group">
			<div className="relative h-90">
				<Image
					src={`https://image.tmdb.org/t/p/w500${episode.still_path}`}
					alt={episode.name}
					width={342}
					height={513}
					className="rounded w-full h-full object-contain group-hover:opacity-50 transition-opacity duration-300"
					placeholder="blur"
					blurDataURL={`https://image.tmdb.org/t/p/w500${episode.still_path}?w=10&h=15`}
				/>
				<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t bg-opacity-30 backdrop-blur-md from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
					<p className="text-white text-sm leading-relaxed">
						{episode.overview.length > 70
							? `${episode.overview.slice(0, 70)} . . .`
							: episode.overview}
					</p>
				</div>
				<div className="absolute top-0 left-0 bg-white bg-opacity-30 backdrop-blur-md duration-300 text-slate-900 px-4 py-1 rounded-br rounded-tl group-hover:-translate-x-2 group-hover:-translate-y-5">
					<div className="flex items-baseline space-x-2">
						<span className="text-xl font-bold">
							{episode.vote_average.toFixed(1)}
						</span>
						<span className="text-xs">/10</span>
					</div>
				</div>
			</div>
			<div className="pb-2">
				<button className="my-2 w-[100%] pt-2 px-1 active:bg-slate-100">
					<Link
						href={`/tv/${tvId}/season/${episode.season_number}/episode/${episode.episode_number}`}>
						<h5 className="text-l font-bold text-gray-900 mb-2 whitespace-nowrap overflow-hidden">
							<span className="inline-block animate-marquee">
								{episode.name}
							</span>
						</h5>
					</Link>
				</button>
				<div className="flex items-center justify-between px-2 mb-2">
					<div className="flex items-center space-x-2">
						<CalendarIcon className="h-5 w-5 text-gray-500" />
						<span className="text-gray-600 text-sm">
							{episode.air_date
								? episode.air_date.slice(0, 4)
								: "---"}
						</span>
					</div>
					<div className="flex items-center space-x-2">
						<ClockIcon className="h-5 w-5 text-gray-500" />
						<span className="text-gray-600 text-sm">
							{episode.runtime} mins
						</span>
					</div>
				</div>
				<div className="flex items-center justify-between px-2 mb-2">
					<div className="flex items-center space-x-2">
						<StarIcon className="h-5 w-5 text-[#ffa500]" />
						<span className="text-gray-600 text-sm">
							{episode.vote_average.toFixed(1)}
						</span>
					</div>
					<div className="flex items-center space-x-2">
						<FlagIcon className="h-5 w-5 text-gray-500" />
						<span className="text-gray-600 text-sm">
							{episode.vote_count.toFixed(1)}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ({ tvId, episodes }) => {
	return (
		<div className="container mx-auto py-8">
			<h3 className="text-2xl font-bold mb-4">Episodes</h3>
			<div className="lg:block hidden">
				<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-8">
					{episodes.map((episode) => (
						<Episode
							episode={episode}
							tvId={tvId}
							key={episode.id}
						/>
					))}
				</div>
			</div>
			<div className="md:block sm:block lg:hidden xl:hidden 2xl:hidden p-10">
				<Carousel className="w-full">
					<CarouselContent className="p-10">
						{episodes.map((episode) => (
							<CarouselItem
								className="md:basis-1/2 sm:basis-1/1"
								key={episode.id}>
								<Episode episode={episode} tvId={tvId} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselNext />
					<CarouselPrevious />
				</Carousel>
			</div>
		</div>
	);
};
