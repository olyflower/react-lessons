import React from "react";
import style from "../OrderCard/OrderCard.module.css";

export default function OrderCard({ order, onClick }) {
	return (
		<>
			<li key={order.id} className={style.card} onClick={onClick}>
				<p>Id: {order.id}</p>
				<p>Name: {order.name}</p>
				<p>Phone: {order.phone}</p>
				<p>Email: {order.email}</p>
				<p>Address: {order.address}</p>
				<p>Priority: {order.priority ? "Yes" : "No"}</p>
				<p>Total Price: €{order.totalPrice}</p>
			</li>
		</>
	);
}
