import config from "./config";

const noInternet = "No internet connection";

export default async (
	url = "",
	customConfig = null,
	errorMessage = "",
	errorReturn = null
) => {
	try {
		const result = await fetch(url, customConfig || { ...config() });
		return await result.json();
	} catch (error) {
		console.log(error);
		return {
			error: true,
			msg: errorMessage || error.msg || noInternet,
			data: errorReturn || null,
		};
	}
};
