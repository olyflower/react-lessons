import React from "react";
import classNames from "classnames";
import Button from "../Button/Button";
import style from "../MenuItem/MenuItem.module.css";

export default function MenuItem({ item, index }) {
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
							<Button onClick={() => console.log("Add to Cart")}>
								Add to cart
							</Button>
						</>
					)}
				</div>
			</div>
		</li>
	);
}
