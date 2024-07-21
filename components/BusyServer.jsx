import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

export default function BusyServer() {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
			<div className="flex items-center mb-4">
				<ExclamationCircleIcon className="h-16 w-16 text-blue-600 animate-spin" />
			</div>
			<h2 className="text-3xl font-bold text-gray-800 mb-2">
				We're Busy!
			</h2>
			<p className="text-lg text-gray-600 mb-4">
				Our servers are currently processing your request. Please wait a
				moment and try again later.
			</p>
		</div>
	);
}
