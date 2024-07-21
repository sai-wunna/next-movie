import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

const BusyServer = () => {
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
				moment.
			</p>
			<div className="flex justify-center space-x-4">
				<button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow transition duration-300">
					Retry
				</button>
				<button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded shadow transition duration-300">
					Contact Support
				</button>
			</div>
		</div>
	);
};

export default BusyServer;
