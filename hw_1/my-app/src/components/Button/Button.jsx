import React from "react";
import { ACTION_TOGGLE, ACTION_DELETE } from "../../constants/constants";

export default function Button({
	item,
	title,
	handleClick,
	handleDelete,
	action,
}) {
	const onClick = () => {
		if (action === ACTION_TOGGLE) {
			handleClick(item);
		} else if (action === ACTION_DELETE) {
			handleDelete(item);
		}
	};
	return (
		<>
			<button onClick={onClick}>{title}</button>
		</>
	);
}
