import Image from "next/image";
import Link from "next/link";

export default function Creators({ creators }) {
	return (
		<div className="my-10 space-y-4">
			<div className="flex flex-wrap gap-2 my-1">
				{creators.map((creator, idx) => (
					<div
						key={creator.id + idx}
						className="group flex items-center space-x-4 border rounded-full pe-10">
						<div className="w-20 h-20 relative">
							{creator.profile_path ? (
								<Image
									src={`https://image.tmdb.org/t/p/w500${creator.profile_path}`}
									alt={creator.name}
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
							<h3 className="font-bold">
								<Link href={`/person/${creator.id}`}>
									{creator.name}
								</Link>
							</h3>
							<p className="text-gray-500 text-sm">Creator</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
