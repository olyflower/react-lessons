import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import services from "../services/services";

export default function Users() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getUsers = async () => {
			const response = await services.get();
			setUsers(response);
		};

		getUsers();
	}, []);

	return (
		<>
			<h2>Users list:</h2>
			{users.length ? (
				<ul>
					{users.map((user, index) => (
						<li key={index}>
							<Link to={`/users/${user.id}`}>{user.name}</Link>
						</li>
					))}
				</ul>
			) : (
				<p>No users found</p>
			)}
		</>
	);
}
