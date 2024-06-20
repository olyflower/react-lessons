import React from "react";
import Button from "../Button/Button";

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
				action="toggle"
			/>{" "}
			<Button
				item={item}
				title="Delete"
				handleDelete={handleDelete}
				action="delete"
			/>
		</li>
	);
}
