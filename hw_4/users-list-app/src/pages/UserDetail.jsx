import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import services from "../services/services";

export default function UserDetail() {
	const { id } = useParams();
	const [user, setUser] = useState(null);

	const getUser = async (id) => {
		const response = await services.get(id);
		setUser(response);
	};

	useEffect(() => {
		if (id) {
			getUser(id);
		}
	}, [id]);

	return (
		<>
			<h2>User Detail:</h2>
			{user ? (
				<div>
					<p>Name: {user.name}</p>
					<p>Username: {user.username}</p>
					<p>Email: {user.email}</p>
					<p>Phone: {user.phone}</p>
					<p>Website: {user.website}</p>
					<h3>Address</h3>
					<p>Street: {user.address.street}</p>
					<p>City: {user.address.city}</p>
				</div>
			) : (
				<p>No user found</p>
			)}
			<button>
				<Link to="/users">Back to Users List</Link>
			</button>
		</>
	);
}
