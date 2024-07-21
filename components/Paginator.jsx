"use client";

import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

export default function Paginator({ path, currentPage, totalPages }) {
	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						onClick={() =>
							window.scroll({ top: 0, behavior: "smooth" })
						}
						href={
							currentPage === 1
								? "#"
								: `${path}=${currentPage - 1}`
						}
					/>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#" isActive>
						{currentPage}
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationNext
						onClick={() =>
							window.scroll({ top: 0, behavior: "smooth" })
						}
						href={
							currentPage === totalPages
								? "#"
								: `${path}=${currentPage + 1}`
						}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
