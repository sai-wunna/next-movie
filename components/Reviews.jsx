// "use client";
// import React, { useEffect, useState, useRef } from "react";

// export default function Reviews({ type, id }) {
// 	const [reviews, setReviews] = useState([]);
// 	const [page, setPage] = useState(1);
// 	const [loading, setLoading] = useState(false);
// 	const [isAvailableToLoadMore, setIsAvailableToLoadMore] = useState(false);
// 	const observerRef = useRef();

// 	const fetchReviews = async () => {
// 		setLoading(true);
// 		// fetch data through server api which then fetch data from tmdb api
// 		const result = await fetch(
// 			`/api/reviews?type=${type}&id=${id}page=${page}`
// 		);
// 		const data = await result.json();

// 		if (
// 			data.reviews.total_pages === 0 ||
// 			data.reviews.total_pages >= page
// 		) {
// 			setIsAvailableToLoadMore(false);
// 		} else {
// 			setIsAvailableToLoadMore(true);
// 		}

// 		setReviews((prev) => [...prev, ...data.reviews.results]);
// 		setLoading(false);
// 	};

// 	useEffect(() => {
// 		fetchReviews();
// 	}, [page]);

// 	// Intersection Observer to load more reviews
// 	useEffect(() => {
// 		if (!isAvailableToLoadMore) return;

// 		const observer = new IntersectionObserver((entries) => {
// 			if (entries[0].isIntersecting && !loading) {
// 				setPage((prev) => prev + 1); // Increment page to fetch more reviews
// 			}
// 		});

// 		if (observerRef.current) {
// 			observer.observe(observerRef.current);
// 		}

// 		return () => {
// 			if (observerRef.current) {
// 				observer.unobserve(observerRef.current);
// 			}
// 		};
// 	}, []);

// 	return (
// 		<div className="p-4 border border-gray-300 rounded-lg">
// 			<h2 className="text-xl font-bold mb-4 border-b">Reviews</h2>
// 			<div className="max-h-[75vh] overflow-y-auto">
// 				{reviews.length === 0 && !loading && (
// 					<div className="text-center text-slate-700">no review</div>
// 				)}
// 				{reviews.map((review, idx) => (
// 					<div
// 						key={review.id + idx}
// 						className="mb-4 p-3 border-b border-gray-200">
// 						<div className="flex items-center mb-2">
// 							<img
// 								src={review.author_details.avatar_path}
// 								alt={review.author_details.username}
// 								className="w-10 h-10 rounded-full mr-2"
// 							/>
// 							<span className="font-semibold">
// 								{review.author}
// 							</span>
// 						</div>
// 						<p className="text-gray-700">{review.content}</p>
// 						<a
// 							href={review.url}
// 							className="text-blue-500 hover:underline">
// 							Read more
// 						</a>
// 					</div>
// 				))}
// 				{loading && (
// 					<p className="text-center">Loading more reviews...</p>
// 				)}
// 				<div ref={observerRef} className="h-1"></div>
// 				{/* Observer */}
// 			</div>
// 		</div>
// 	);
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////Upper one is with intersection observer///////////////////////////////////////
/////////////Not okay with vercel free serverless limitations which limits 4.5MB or load data////////////
//////////////////////////////////////////////\\\////////////////////////////////////////////////////////

import posterPath from "@/app/constants/posterPath";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Reviews({ reviews, moreReviewsRoute }) {
	return (
		<div className="p-4 border border-gray-300 rounded-lg">
			<div className="flex justify-between items-center mb-4 border-b">
				<h2 className="text-xl font-bold">Reviews</h2>
				{moreReviewsRoute && (
					<Link href={moreReviewsRoute}>
						<ArrowUpRightIcon className="w-4 h-4 text-slate-800" />
					</Link>
				)}
			</div>
			<div className="max-h-[75vh] overflow-y-auto">
				{reviews.length === 0 && (
					<div className="text-center text-slate-700">no review</div>
				)}
				{reviews.map((review, idx) => (
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
		</div>
	);
}
