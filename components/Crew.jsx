import { FireIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default ({ crew }) => {
	return (
		<div className="my-10 space-y-4">
			<h3 className="my-2 text-xl font-bold">Crew</h3>
			<div className="flex flex-wrap gap-4 my-1">
				{crew.map((person, idx) => (
					<div
						key={person.id + idx}
						className="flex space-x-2 border-2 rounded-md p-2 relative group">
						<div className="w-16 h-16 relative">
							{person.profile_path ? (
								<Image
									src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
									alt={person.name}
									fill
									priority
									sizes="auto"
									className="shadow-xl object-cover rounded group-hover:scale-150 group-hover:translate-x-3 group-hover:translate-y-3 z-10 transition-all duration-300"
								/>
							) : (
								<div className="rounded bg-gradient-to-tl from-orange-200 to-red-400 w-[100%] h-[100%]"></div>
							)}
						</div>
						<div>
							<h3 className="font-bold">
								<Link href={`/person/${person.id}`}>
									{person.name}
								</Link>
							</h3>
							<p className="text-slate-900 text-sm">
								<small>Name :</small>
								{person.original_name}
							</p>
							<p className="text-slate-900 text-sm">
								<small>Dept : </small>
								{person.department}
							</p>
							<p className="text-slate-900 text-sm">
								<small>Gender :</small>
								{person.gender === 2 ? "Male" : "Female"}
							</p>
						</div>
						<div className="flex items-center text-sm font-bold rounded-md text-orange-500 absolute -top-3 left-1/2 -translate-x-1/2 border-2 px-1 bg-white">
							<FireIcon className="w-4 h-4 inline-block" />
							<span>{person.popularity.toFixed(1)}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
