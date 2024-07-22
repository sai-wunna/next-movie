import getAPerson from "@/tmdbAPIs/persons/getAPerson";
import getAPersonImages from "@/tmdbAPIs/persons/getAPersonImages";
import BusyServer from "@/components/BusyServer";
import ImageGallery from "@/components/ImageGallery";
import { PlayIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function page({ params }) {
	const { id } = params;
	const person = await getAPerson(id);
	const images = await getAPersonImages(id);

	return (
		<div className="container mx-auto p-6">
			{person.error ? (
				<BusyServer />
			) : (
				<>
					<div className="flex justify-center">
						<Link href={`/person/${id}/credits`}>
							<PlayIcon className="w-6 h-6 text-orange-800 mx-2" />
						</Link>
					</div>
					<div className="flex flex-col md:flex-row items-start">
						<Image
							alt={person.name}
							width={1000}
							height={750}
							style={{
								width: "auto",
								height: "auto",
								boxShadow: "10px 10px 0 0 silver",
								transform: "rotate(1deg)",
								scale: 0.9,
							}}
							className="rounded-lg shadow-lg"
							src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
						/>
						<div className="ml-6">
							<h1 className="text-3xl font-bold text-gray-800 my-6">
								{person.name}
							</h1>
							<p className="text-gray-600">
								<small>Born : </small>
								{person.birthday}
							</p>
							<p className="text-gray-600">
								<small>Place of Birth : </small>
								{person.place_of_birth}
							</p>
							<p className="mt-4 indent-10">{person.biography}</p>
							<h2 className="text-xl font-semibold mt-4">
								Also Known As:
							</h2>
							<ul className="list-disc list-inside mt-2">
								{person.also_known_as.map((alias, index) => (
									<li key={index} className="text-gray-700">
										{alias}
									</li>
								))}
							</ul>
						</div>
					</div>

					<ImageGallery
						images={images.profiles}
						owner={person.name}
					/>
				</>
			)}
		</div>
	);
}
