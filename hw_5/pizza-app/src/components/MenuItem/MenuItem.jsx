import React, { useState } from "react";
import classNames from "classnames";
import Button from "../Button/Button";
import style from "../MenuItem/MenuItem.module.css";

export default function MenuItem({ item, index }) {
	const [count, setCount] = useState(0);
	const [addCart, setAddCart] = useState(false);

	const handlerIncrement = () => {
		setCount(count + 1);
	};

	const handlerDecrement = () => {
		if (count > 0) setCount(count - 1);
	};

	const handleAddToCart = () => {
		setAddCart(true);
		setCount(1);
	};

	const handleDelete = () => {
		setAddCart(false);
		setCount(0);
	};

	return (
		<li
			className={classNames(style.pizza, {
				[style.soldOut]: item.soldOut,
			})}
			key={index}
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

							{!addCart ? (
								<Button onClick={handleAddToCart}>
									Add to cart
								</Button>
							) : (
								<>
									<div className={style.pizza__count}>
										<Button onClick={handlerDecrement}>
											-
										</Button>
										{count}
										<Button onClick={handlerIncrement}>
											+
										</Button>
									</div>

									<Button onClick={handleDelete}>
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
