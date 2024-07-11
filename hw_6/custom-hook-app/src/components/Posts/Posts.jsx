import { POSTS_URL } from "../../constants/constants";
import useFetch from "../../hooks/useFetch/useFetch";

export default function Posts() {
	const { data: posts, error, isLoading } = useFetch(POSTS_URL);

	return (
		<>
			{isLoading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}
			{!isLoading && !error && (
				<ul>
					{posts ? (
						posts.map((item, index) => (
							<li key={index}>{item.title}</li>
						))
					) : (
						<p>No posts found</p>
					)}
				</ul>
			)}
		</>
	);
}
