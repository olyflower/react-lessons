import React from "react";
import { Link } from "react-router-dom";

export default function NoPage() {
	return (
		<>
			<h1>404</h1>
			<h4>Page not found</h4>
			<button>
				<Link to="/users">Back to Users List</Link>
			</button>
		</>
	);
}
