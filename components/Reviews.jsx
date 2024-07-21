"use client";
import React, { useEffect, useState, useRef } from "react";

export default ({ type, id }) => {
	const [reviews, setReviews] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [isAvailableToLoadMore, setIsAvailableToLoadMore] = useState(false);
	const observerRef = useRef();

	const fetchReviews = async () => {
		setLoading(true);
		// fetch data through server api which then fetch data from tmdb api
		const result = await fetch(`/api/${type}/${id}/reviews?page=${page}`);
		const data = await result.json();

		if (data.reviews.total_pages === page) {
			setIsAvailableToLoadMore(false);
		} else {
			setIsAvailableToLoadMore(true);
		}

		setReviews((prev) => [...prev, ...data.reviews.results]);
		setLoading(false);
	};

	useEffect(() => {
		fetchReviews();
	}, [page]);

	// Intersection Observer to load more reviews
	useEffect(() => {
		if (!isAvailableToLoadMore) return;

		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting && !loading) {
				setPage((prev) => prev + 1); // Increment page to fetch more reviews
			}
		});

		if (observerRef.current) {
			observer.observe(observerRef.current);
		}

		return () => {
			if (observerRef.current) {
				observer.unobserve(observerRef.current);
			}
		};
		// on every loading state change
	}, [loading]);

	return (
		<div className="p-4 border border-gray-300 rounded-lg shadow-lg">
			<h2 className="text-xl font-bold mb-4 border-b">Reviews</h2>
			<div className="max-h-[75vh] overflow-y-auto">
				{reviews.map((review, idx) => (
					<div
						key={review.id + idx}
						className="mb-4 p-3 border-b border-gray-200">
						<div className="flex items-center mb-2">
							<img
								src={review.author_details.avatar_path}
								alt={review.author_details.username}
								className="w-10 h-10 rounded-full mr-2"
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
				{loading && (
					<p className="text-center">Loading more reviews...</p>
				)}
				<div ref={observerRef} className="h-1"></div>
				{/* Observer */}
			</div>
		</div>
	);
};
