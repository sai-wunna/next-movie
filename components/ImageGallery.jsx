import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default ({ images, owner }) => {
	return (
		<div className="container mx-auto p-6">
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{images.map((image, index) => (
					<div
						key={index}
						className="relative group overflow-hidden rounded-lg shadow-lg">
						<Image
							src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
							alt={owner || image.file_path}
							className="w-full h-auto transition-transform duration-300 transform group-hover:scale-105"
							width={image.width}
							height={image.height}
						/>
						<div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<p className="flex items-baseline justify-center">
								<StarIcon className="w-4 h-4 text-orange-800 mx-2" />
								{image.vote_average.toFixed(1)}
								<small className="mx-2"> / 10</small>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
