import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import style from "../Order/NewOrder.module.css";

export default function Order() {
	const navigate = useNavigate();

	const handleCreateNewOrder = () => {
		navigate("/order/new");
	};

	return (
		<div className={style.container}>
			<h1>Order Page</h1>
			<div>
				<h2>Current orders:</h2>
			</div>
			<div>
				<Button onClick={handleCreateNewOrder}>Create new order</Button>
			</div>
		</div>
	);
}
