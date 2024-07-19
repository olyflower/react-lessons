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

export default function Cart() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const cart = useSelector((store) => store.cart);
	const userName = useSelector((state) => state.auth.userName);

	const handlerRedirectMenu = useCallback(() => {
		navigate("/menu");
	}, [navigate]);

	const handleClearCart = useCallback(() => {
		dispatch(clearCart());
	}, [dispatch]);

	const handleIncrement = useCallback((id) => {
		dispatch(incrementQuantity({ id }));
	}, dispatch);

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
							<div key={item.id} className={style.items}>
								<li>
									<div className={style.content}>
										<span>
											{item.quantity}*{item.name}
										</span>
										<span>
											€
											{item.unitPrice.toFixed(2) *
												item.quantity}
										</span>

										<div className={style.buttons}>
											<Button
												onClick={() =>
													handleDecrement(item.id)
												}
											>
												-
											</Button>
											{item.quantity}
											<Button
												onClick={() =>
													handleIncrement(item.id)
												}
											>
												+
											</Button>
											<Button
												onClick={() =>
													handleDeleteFromCart(
														item.id
													)
												}
											>
												Delete
											</Button>
										</div>
									</div>
								</li>
							</div>
						))}
					</ul>
				)}
			</div>
			<div className={style.totals}>
				<p>Total items: {cart.totalItems}</p>
				<p>Total price: €{cart.totalPrice}</p>
			</div>
			<div className={style.buttons}>
				<Button>Order Pizzas</Button>
				<Button onClick={handleClearCart}>Clear Cart</Button>
			</div>
		</div>
	);
}
