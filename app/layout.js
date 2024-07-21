import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Movie Hub",
	description: "Generated by create next next next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="p-0 m-0">
					<Header />
					<section className="flex gap-4">
						<div className="w-[220px] pr-1 border-r lg:block hidden">
							<Sidebar />
						</div>
						<main className="flex flex-col mt-5 w-full mx-auto overflow-x-hidden">
							<div className="min-h-[80vh] flex flex-col">
								{children}
							</div>
							<footer className="text-xs py-4 mt-4 border-t text-gray-300 text-center">
								&copy; Copyright 2024
							</footer>
							<ScrollToTop />
						</main>
					</section>
				</div>
			</body>
		</html>
	);
}
