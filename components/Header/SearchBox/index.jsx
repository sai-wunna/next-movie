import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { redirect } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon, NoSymbolIcon } from "@heroicons/react/24/outline";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

async function handleSearch(formData) {
	"use server";

	const q = formData.get("q");
	const type = formData.get("type");
	const include_adult = formData.get("include_adult") === "on";
	const date = formData.get("date") || "all time";
	const language = formData.get("language");

	if (!q) {
		return;
	}

	const path = `/search/${type}?query=${q}&include_adult=${include_adult}&language=${language}&${
		type === "movie" ? "primary_release_year" : "first_air_date_year"
	}=${date}&page=1`;

	return redirect(path);
}

export default () => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<div className="border rounded-full p-3 cursor-pointer">
					<MagnifyingGlassIcon className="w-5 h-5 text-orange-600" />
				</div>
			</PopoverTrigger>
			<PopoverContent className="w-100 m-1 bg-white shadow-lg rounded-lg p-4 max-h-[80vh] overflow-y-auto">
				<form action={handleSearch} className="space-y-4">
					<div className="flex items-center space-x-2">
						<div className="flex items-center space-x-1">
							<Label
								htmlFor="include_adult"
								className="relative ">
								21+
								<NoSymbolIcon className="w-10 h-10 absolute text-orange-800 -top-3 opacity-25" />
							</Label>
							<Checkbox id="include_adult" name="include_adult" />
						</div>
						<Input
							type="search"
							id="q"
							name="q"
							placeholder="Search movies..."
							className="flex-1"
						/>
						<Button
							type="submit"
							className="bg-orange-600 hover:bg-orange-700 text-white p-2 m-0">
							<MagnifyingGlassIcon className="h-5 w-5" />
						</Button>
					</div>
					<div className="flex items-center space-x-2 my-2">
						<Select name="type" defaultValue="movie">
							<SelectTrigger>
								<SelectValue placeholder="Movie" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="movie">Movie</SelectItem>
									<SelectItem value="tv">TV</SelectItem>
									<SelectItem value="person">
										Person
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
						<Select name="language" defaultValue="en-US">
							<SelectTrigger>
								<SelectValue placeholder="English" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Languages</SelectLabel>
									{[
										{ value: "en-US", name: "English" },
										{ value: "fr-FR", name: "French" },
										{ value: "es-ES", name: "Spanish" },
										{ value: "de-DE", name: "German" },
										{ value: "it-IT", name: "Italian" },
										{ value: "ja-JP", name: "Japanese" },
										{ value: "ko-KR", name: "Korean" },
										{ value: "pt-BR", name: "Portuguese" },
										{ value: "zh-CN", name: "Chinese" },
									].map(({ value, name }) => (
										<SelectItem value={value} key={value}>
											{name}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>
						<Select name="date" defaultValue="all time">
							<SelectTrigger>
								<SelectValue placeholder={"Date"} />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Years</SelectLabel>
									{Array.from(
										{
											length:
												new Date().getFullYear() -
												1900 +
												1,
										},
										(_, i) => 1900 + i
									).map((option) => (
										<SelectItem
											value={`${option}`}
											id={`year-${option}`}
											key={option}>
											{option}
										</SelectItem>
									))}
									<SelectItem value="all time">
										All Time
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</form>
			</PopoverContent>
		</Popover>
	);
};
