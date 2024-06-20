import React from "react";
import Button from "../Button/Button";
import { ACTION_TOGGLE, ACTION_DELETE } from "../../constants/constants";

export default function ListItem({
	item,
	handleClick,
	handleDelete,
	className,
	activateTitle,
}) {
	return (
		<li className={className}>
			{item.icon} {item.type}{" "}
			<Button
				item={item}
				title={activateTitle}
				handleClick={handleClick}
				action={ACTION_TOGGLE}
			/>{" "}
			<Button
				item={item}
				title="Delete"
				handleDelete={handleDelete}
				action={ACTION_DELETE}
			/>
		</li>
	);
}
