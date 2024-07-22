import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
	deleteFromCart,
	incrementQuantity,
	decrementQuantity,
	clearCart,
} from "../../redux/slices/cartSlice";
import Button from "../../components/Button/Button";
import style from "../Cart/Cart.module.css";
import CartItem from "../../components/CartItem/CartItem";

export default function Cart() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const cart = useSelector((store) => store.cart);
	const userName = useSelector((store) => store.auth.userName);

	const handlerRedirectMenu = useCallback(() => {
		navigate("/menu");
	}, [navigate]);

	const handleClearCart = useCallback(() => {
		dispatch(clearCart());
	}, [dispatch]);

	const handleIncrement = useCallback(
		(id) => {
			dispatch(incrementQuantity({ id }));
		},
		[dispatch]
	);

	const handleDecrement = useCallback(
		(id) => {
			dispatch(decrementQuantity({ id }));
		},
		[dispatch]
	);

	const handleDeleteFromCart = useCallback(
		(id) => {
			dispatch(deleteFromCart({ id }));
		},
		[dispatch]
	);

	const handlerRedirectOrder = () => {
		navigate("/order");
	};

	return (
		<div className={style.container}>
			<div className={style.actions}>
				<div>
					<Button onClick={handlerRedirectMenu}>
						{"\u2190"}Back to menu
					</Button>
				</div>
				<h1>Your cart, {userName}</h1>
			</div>

			<div className={style.content}>
				{cart.items.length === 0 ? (
					<p>Cart is empty.</p>
				) : (
					<ul>
						{cart.items.map((item) => (
							<CartItem
								key={item.id}
								item={item}
								handleIncrement={handleIncrement}
								handleDecrement={handleDecrement}
								handleDeleteFromCart={handleDeleteFromCart}
							/>
						))}
					</ul>
				)}
			</div>
			<div className={style.totals}>
				<p>Total items: {cart.totalItems}</p>
				<p>Total price: €{cart.totalPrice}</p>
			</div>
			<div className={style.buttons}>
				<Button onClick={handlerRedirectOrder}>Order Pizzas</Button>
				<Button onClick={handleClearCart}>Clear Cart</Button>
			</div>
		</div>
	);
}
