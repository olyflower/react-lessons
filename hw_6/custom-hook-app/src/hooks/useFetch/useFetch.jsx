import { useState, useEffect } from "react";

export default function useFetch(url) {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		const getData = async () => {
			setIsLoading(true);
			try {
				const request = await fetch(url, { signal });
				if (!request.ok) {
					throw new Error(`Error status: ${request.status}`);
				}
				const response = await request.json();
				setData(response);
			} catch (error) {
				if (error.name !== "AbortError") {
					setError(error.message);
				}
			} finally {
				setIsLoading(false);
			}
		};

		getData();

		return () => {
			controller.abort();
		};
	}, [url]);

	return { data, error, isLoading };
}
