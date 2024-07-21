import Link from "next/link";
import { Button } from "../ui/button";
import getMovieGenres from "@/api/movies/getMovieGenres";
import getTVGenres from "@/api/tvs/getTVGenres";
import PlayIcon from "@heroicons/react/24/solid/PlayIcon";
import BusyServer from "../BusyServer";

function GenreList({ genres, type }) {
	return (
		<div className="flex flex-col gap-2 z-40">
			{genres.map((genre) => (
				<Button
					key={genre.id}
					variant="ghost"
					className="justify-start text-gray-700 hover:bg-gray-100 transition-colors focus:bg-gray-200"
					asChild>
					<Link
						href={`/genres/${genre.name}__${type}/${genre.id}`}
						className="flex items-center ">
						<PlayIcon className="h-4 w-4 me-1 text-orange-500" />
						{genre.name}
					</Link>
				</Button>
			))}
		</div>
	);
}

export default async () => {
	const movieGenres = await getMovieGenres();
	const tvGenres = await getTVGenres();

	return (
		<aside className="sticky top-20 p-4 h-[85vh] overflow-y-auto">
			<h6 className="p-2 text-center font-bold my-3">Movies</h6>
			{movieGenres.genres ? (
				<GenreList genres={movieGenres.genres} type={"movies"} />
			) : (
				<BusyServer />
			)}
			<div className="border-b-2 my-2"></div>
			<h6 className="p-2 text-center font-bold my-3">TVs</h6>
			{tvGenres.genres ? (
				<GenreList genres={tvGenres.genres} type={"tvs"} />
			) : (
				<BusyServer />
			)}
		</aside>
	);
};
