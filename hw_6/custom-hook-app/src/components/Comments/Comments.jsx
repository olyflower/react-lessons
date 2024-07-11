import useFetch from "../../hooks/useFetch/useFetch";
import { COMMENTS_URL } from "../../constants/constants";

export default function Comments() {
	const { data: comments, error, isLoading } = useFetch(COMMENTS_URL);

	return (
		<>
			{isLoading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}
			{!isLoading && !error && (
				<ul>
					{comments ? (
						comments.map((item, index) => (
							<li key={index}>{item.name}</li>
						))
					) : (
						<p>No comments found</p>
					)}
				</ul>
			)}
		</>
	);
}
