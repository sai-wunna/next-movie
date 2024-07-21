"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
	ArrowLongDownIcon,
	ArrowLongUpIcon,
} from "@heroicons/react/24/outline";

export default function ScrollToTop() {
	const [toTop, setToTop] = useState(true);

	const scrollListener = () => {
		if (window.scrollY > 3000) {
			if (toTop) {
				setToTop(false);
			}
		} else {
			if (!toTop) {
				setToTop(true);
			}
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", scrollListener);
		return () => window.removeEventListener("scroll", scrollListener);
	}, [scrollListener]);

	return !toTop ? (
		<Button
			className="fixed bottom-4 right-4 z-50 rounded-full bg-gray-800 p-2 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 sm:bottom-8 sm:right-8"
			aria-label="Scroll to top"
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
			<ArrowLongUpIcon className="h-6 w-6" />
		</Button>
	) : (
		<Button
			className="fixed bottom-4 right-4 z-50 rounded-full bg-gray-800 p-2 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 sm:bottom-8 sm:right-8"
			aria-label="Scroll to bottom"
			onClick={() =>
				window.scrollTo({
					top: document.body.scrollHeight,
					behavior: "smooth",
				})
			}>
			<ArrowLongDownIcon className="h-6 w-6" />
		</Button>
	);
}
