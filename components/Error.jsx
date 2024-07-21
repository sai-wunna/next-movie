"use client";
import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

export default function Error() {
	return (
		<div className="flex flex-col items-center justify-center h-[80vh]">
			<div className="bg-white p-6 text-center max-w-md mx-auto">
				<ExclamationCircleIcon className="h-16 w-16 text-red-600 mb-4 mx-auto animate-bounce" />
				<h2 className="text-2xl font-bold text-red-800 mb-2">
					Oops! Something Went Wrong
				</h2>
				<p className="text-gray-600 mb-4">
					We encountered an unexpected error. Please try again later
					or contact support if the issue persists.
				</p>
				<div className="flex justify-center space-x-4">
					<button className="bg-gray-100 hover:bg-gray-200 text-blue-800 font-semibold py-2 px-4 rounded shadow transition duration-300">
						Contact Support
					</button>
				</div>
			</div>
		</div>
	);
}
