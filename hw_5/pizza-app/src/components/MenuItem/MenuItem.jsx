import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addToCart,
	deleteFromCart,
	incrementQuantity,
	decrementQuantity,
} from "../../redux/slices/cartSlice";
import Button from "../Button/Button";
import classNames from "classnames";
import style from "../MenuItem/MenuItem.module.css";

export default function MenuItem({ item }) {
	const dispatch = useDispatch();
	const cartItem = useSelector((store) =>
		store.cart.items.find((cartItem) => cartItem.id === item.id)
	);

	const handleAddToCart = useCallback(() => {
		dispatch(
			addToCart({
				id: item.id,
				name: item.name,
				unitPrice: item.unitPrice,
			})
		);
	}, [dispatch, item.id, item.name, item.unitPrice]);

	const handleDeleteFromCart = useCallback(() => {
		dispatch(deleteFromCart({ id: item.id }));
	}, [dispatch, item.id]);

	const handleIncrement = useCallback(() => {
		dispatch(incrementQuantity({ id: item.id }));
	}, [dispatch, item.id]);

	const handleDecrement = useCallback(() => {
		dispatch(decrementQuantity({ id: item.id }));
	}, []);

	return (
		<li
			className={classNames(style.pizza, {
				[style.soldOut]: item.soldOut,
			})}
			key={item.id}
		>
			<img
				className={style.pizza__image}
				src={item.imageUrl}
				alt={item.name}
			/>
			<div className={style.pizza__info}>
				<p className={style.pizza__name}>{item.name}</p>
				<p className={style.pizza__ingredients}>
					{item.ingredients.join(", ")}
				</p>
				<div className={style.pizza__actions}>
					{item.soldOut ? (
						<p className={style.pizza__price}>Sold out</p>
					) : (
						<>
							<p className={style.pizza__price}>
								€{item.unitPrice.toFixed(2)}
							</p>

							{!cartItem ? (
								<Button onClick={handleAddToCart}>
									Add to cart
								</Button>
							) : (
								<>
									<div className={style.pizza__count}>
										<Button onClick={handleDecrement}>
											-
										</Button>
										{cartItem.quantity}
										<Button onClick={handleIncrement}>
											+
										</Button>
									</div>

									<Button onClick={handleDeleteFromCart}>
										Delete
									</Button>
								</>
							)}
						</>
					)}
				</div>
			</div>
		</li>
	);
}
