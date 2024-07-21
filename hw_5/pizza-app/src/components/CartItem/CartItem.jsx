import React from "react";
import Button from "../../components/Button/Button";
import style from "../../pages/Cart/Cart.module.css";

export default function CartItem({
	item,
	handleDecrement,
	handleIncrement,
	handleDeleteFromCart,
}) {
	return (
		<>
			<div key={item.id} className={style.items}>
				<li>
					<div className={style.content}>
						<span>
							{item.quantity}*{item.name}
						</span>
						<span>
							€{item.unitPrice.toFixed(2) * item.quantity}
						</span>

						<div className={style.buttons}>
							<Button onClick={() => handleDecrement(item.id)}>
								-
							</Button>
							{item.quantity}
							<Button onClick={() => handleIncrement(item.id)}>
								+
							</Button>
							<Button
								onClick={() => handleDeleteFromCart(item.id)}
							>
								Delete
							</Button>
						</div>
					</div>
				</li>
			</div>
		</>
	);
}
