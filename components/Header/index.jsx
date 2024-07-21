import Link from "next/link";
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Bars4Icon } from "@heroicons/react/24/outline";
import Sidebar from "../Sidebar";
import SearchBox from "./SearchBox";
import ThemeToggler from "../ThemeToggler";

export default function Header() {
	return (
		<div
			className="p-2 sticky top-0 right-0 w-[100%] bg-white bg-opacity-70 backdrop-blur-md z-50"
			style={{
				backdropFilter: "blur(10px)",
				WebkitBackdropFilter: "blur(10px)",
			}}>
			<div className="w-[100%] flex justify-between border-b p-3">
				<div className="p-1 px-2 flex items-center me-1 bg-gradient-to-r from-orange-400 to-red-500 ps-1 text-white rounded">
					<Drawer>
						<DrawerTrigger className="md:block sm:block lg:hidden xl:hidden 2xl:hidden">
							<Bars4Icon className="w-6 h-6 me-2" />
						</DrawerTrigger>
						<DrawerContent>
							<DrawerHeader>
								<DrawerTitle></DrawerTitle>
								<DrawerDescription></DrawerDescription>
								<Sidebar />
							</DrawerHeader>
						</DrawerContent>
					</Drawer>
					<Link href={"/"}>
						<h1 className="text-nowrap font-bold text-lg relative px-2">
							Movie Hub
						</h1>
					</Link>
				</div>
				<div className="flex items-center">
					<SearchBox />
					{/* working on it */}
					{/* <ThemeToggler /> */}
				</div>
			</div>
		</div>
	);
}
