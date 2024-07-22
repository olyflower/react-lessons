import React from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import style from "../Order/NewOrder.module.css";
import OrderCard from "../../components/OrderCard/OrderCard";
import { useRedirect } from "../../hooks/useRedirect";

export default function Order() {
	const orders = useSelector((store) => store.orders.orders);

	const redirectToNewOrder = useRedirect("/order/new");
	const redirectToMenu = useRedirect("/menu");

	return (
		<div className={style.container}>
			<h1>Order Page</h1>
			<div>
				<h2>Current orders:</h2>
				<ul>
					{orders.map((order) => (
						<OrderCard key={order.id} order={order} />
					))}
				</ul>
			</div>
			<div>
				<Button onClick={redirectToNewOrder}>Create new order</Button>
			</div>
			<div>
				<Button onClick={redirectToMenu}>Back to menu</Button>
			</div>
		</div>
	);
}
