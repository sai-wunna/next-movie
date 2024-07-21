import { FireIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default ({ cast }) => {
	return (
		<div className="my-10 space-y-4">
			<h3 className="my-2 text-xl font-bold">Casts</h3>
			<div className="flex flex-wrap gap-2 my-1">
				{cast.map((castMember, idx) => (
					<div
						key={castMember.id + idx}
						className="group flex items-center space-x-4 border rounded-full pe-10">
						<div className="w-20 h-20 relative">
							{castMember.profile_path ? (
								<Image
									src={`https://image.tmdb.org/t/p/w500${castMember.profile_path}`}
									alt={castMember.name}
									fill
									priority
									sizes="auto"
									className="object-cover rounded-full p-2 border group-hover:scale-150 bg-white transition-all group-hover:translate-x-5 duration-300"
								/>
							) : (
								<div className="w-[100%] h-[100%] p-2 border rounded-full">
									<div className="w-[100%] h-[100%] rounded-full bg-gradient-to-t from-orange-200 to-red-400"></div>
								</div>
							)}
						</div>
						<div>
							<div className="flex items-center text-orange-600 font-bold">
								<FireIcon className="w-4 h-4 inline-block" />
								<span>{castMember.popularity.toFixed(1)}</span>
							</div>
							<h3 className="font-bold">
								<Link href={`/person/${castMember.id}`}>
									{castMember.name}
								</Link>
							</h3>
							<p className="text-gray-500 text-sm">
								as {castMember.character}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
