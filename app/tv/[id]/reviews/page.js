import posterPath from "@/app/constants/posterPath";
import Paginator from "@/components/Paginator";
import getReviews from "@/tmdbAPIs/general/getReviews";
import Image from "next/image";

export default async function page({ searchParams, params }) {
	const { id } = params;
	const { page } = searchParams;
	const reviews = await getReviews("tv", id, page || 1);

	return (
		<>
			<div className="">
				{reviews.results.length === 0 && (
					<div className="text-center text-slate-700 my-20">
						no review
					</div>
				)}
				{reviews.results.map((review, idx) => (
					<div
						key={review.id + idx}
						className="mb-4 p-3 border-b border-gray-200">
						<div className="flex items-center mb-2">
							<Image
								src={`${posterPath}/${review.author_details.avatar_path}`}
								alt={review.author_details.username}
								className="w-10 h-10 rounded-full mr-2"
								width={342}
								height={513}
							/>
							<span className="font-semibold">
								{review.author}
							</span>
						</div>
						<p className="text-gray-700">{review.content}</p>
						<a
							href={review.url}
							className="text-blue-500 hover:underline">
							Read more
						</a>
					</div>
				))}
			</div>
			<Paginator
				currentPage={reviews.page}
				totalPages={reviews.total_pages}
				path={`/movie/${id}/reviews?page`}
			/>
		</>
	);
}
