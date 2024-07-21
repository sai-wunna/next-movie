import {
	Dialog,
	DialogContent,
	DialogTrigger,
	DialogTitle,
} from "@/components/ui/dialog";
import { PlayIcon } from "@heroicons/react/24/outline";
import { Button } from "./ui/button";

export default ({ teaser }) => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant="ghost"
					className="justify-start text-gray-700 hover:bg-gray-100 transition-colors focus:bg-gray-200">
					<PlayIcon className="w-6 h-6 me-2 text-orange-700 cursor-pointer" />
					{teaser.name}
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-screen-md p-8 bg-transparent border-0 shadow-none text-white">
				<DialogTitle className="sr-only">Movie Trailer</DialogTitle>
				<div key={teaser.id}>
					<iframe
						width="100%"
						height="315"
						src={`https://www.youtube.com/embed/${teaser.key}`}
						frameBorder="0"
						className="border-b"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
				</div>
			</DialogContent>
		</Dialog>
	);
};
