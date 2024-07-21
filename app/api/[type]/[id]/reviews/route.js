import getReviews from "@/api/general/getReviews";

export async function GET(request, { params }) {
	const { searchParams } = new URL(request.url);
	const { id, type } = params;
	const page = searchParams.get("page");

	const res = await getReviews(type, id, page);

	return Response.json({ reviews: res });
}
