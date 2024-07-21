"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

export default () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
	};

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [isDarkMode]);

	return (
		<button onClick={toggleTheme} className="p-2 rounded">
			{isDarkMode ? (
				<SunIcon className="w-6 h-6" />
			) : (
				<MoonIcon className="w-6 h-6" />
			)}
		</button>
	);
};
