import React from "react";
import Image from "next/image";
import { MovieItem } from "./MovieList";
import { TVItem } from "./TVList";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "../ui/card";
import { PlayIcon } from "@heroicons/react/24/solid";

const Person = ({ person }) => {
	return (
		<Card className="flex flex-col items-start gap-2 px-5 m-1">
			<div className="flex flex-col sm:flex-row items-center gap-5 py-4 w-full">
				<div className="flex-shrink-0">
					<Image
						src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
						alt={person.name}
						width={128}
						height={128}
						className="rounded-md rotate-[-2deg]"
						style={{ boxShadow: "4px 4px 0 0 silver" }}
					/>
				</div>
				<div className="min-w-56 flex-grow">
					<h2 className="text-2xl font-bold">{person.name}</h2>
					<p>
						<small className="text-gray-500">Known For : </small>
						{person.known_for_department}
					</p>
					<p>
						<small className="text-gray-500">Popularity : </small>
						{person.popularity.toFixed(2)}
					</p>
					<p>
						<small className="text-gray-500">Gender : </small>
						{person.gender === 1 ? "Female" : "Male"}
					</p>
				</div>
			</div>
			<div className="container mx-auto px-8 py-2 border-t border-t-orange-200 relative">
				<PlayIcon className="w-6 h-6 -top-3 left-[50%] absolute text-orange-600 bg-white" />
				<div className="lg:block hidden">
					<div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-8">
						{person.known_for.map((item) => (
							<div key={item.id}>
								{item.media_type === "movie" ? (
									<MovieItem movie={item} />
								) : (
									<TVItem tv={item} />
								)}
							</div>
						))}
					</div>
				</div>
				<div className="md:block sm:block lg:hidden xl:hidden 2xl:hidden">
					<Carousel className="w-full">
						<CarouselContent className="p-10">
							{person.known_for.map((item) => (
								<CarouselItem
									className="md:basis-1/3 sm:basis-1/2"
									key={item.id}>
									{item.media_type === "movie" ? (
										<MovieItem movie={item} />
									) : (
										<TVItem tv={item} />
									)}
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselNext />
						<CarouselPrevious />
					</Carousel>
				</div>
			</div>
		</Card>
	);
};

export default ({ people }) => {
	return (
		<>
			{people.length < 1 ? (
				<div className="text-center my-10 font-bold">No Person</div>
			) : (
				<div className="py-4 my-4">
					{people.map((person) => (
						<Person person={person} key={person.id} />
					))}
				</div>
			)}
		</>
	);
};
