import React from "react";

export default function Button({
	item,
	title,
	handleClick,
	handleDelete,
	action,
}) {
	const onClick = () => {
		if (action === "toggle") {
			handleClick(item);
		} else if (action === "delete") {
			handleDelete(item);
		}
	};
	return (
		<>
			<button onClick={onClick}>{title}</button>
		</>
	);
}
