import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default () => {
	const router = useRouter();

	useEffect(() => {
		// to scroll automatically to top on page change
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [router.events]);

	return (
		<div className="absolute top-[50%] left-[50%] translate-[-50%,-50%] w-10 h-10 animate-ping">
			<div className="relative w-10 h-10 animate-bounce">
				<div className="absolute w-10 h-10 rounded-full skew-x-[35deg] border-2 border-orange-800"></div>
				<div className="absolute w-10 h-10 rounded-full border-2 border-slate-800"></div>
			</div>
		</div>
	);
};
