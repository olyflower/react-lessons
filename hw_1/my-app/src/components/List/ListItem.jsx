import React, { useState } from "react";

export default function ListItem({ item, handleDelete }) {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};

	const style = active ? { color: "green", fontWeight: "bold" } : {};
	const title = active ? "Deactivate" : "Activate";

	return (
		<li style={style}>
			{item.icon} {item.type}{" "}
			<button onClick={handleClick}>{title}</button>{" "}
			<button onClick={() => handleDelete(item)}>Delete</button>
		</li>
	);
}
