import React, { useState } from "react";
import ListItem from "../ListItem/ListItem";
import classes from "../ListItem/classes.module.css";
import { LIST_ACTIVE, LIST_DEACTIVE } from "../../constants/constants";

export default function List({ list: propsList = [] }) {
	const [list, setList] = useState(propsList);
	const [active, setActive] = useState([]);

	const handleClick = (item) => {
		setActive((prevActive) => {
			const isActive = prevActive.includes(item);
			if (isActive) {
				return prevActive.filter((activeItem) => activeItem !== item);
			} else {
				return [...prevActive, item];
			}
		});
	};

	const handleDelete = (item) => {
		const newList = list.filter((animal) => animal !== item);
		setList(newList);
	};

	return list.length > 0 ? (
		<ul>
			{list.map((item, index) => {
				const isActive = active.includes(item);
				const style = isActive ? classes.active : "";

				const activateTitle = isActive ? LIST_DEACTIVE : LIST_ACTIVE;

				return (
					<ListItem
						key={index}
						item={item}
						className={style}
						activateTitle={activateTitle}
						handleClick={handleClick}
						handleDelete={handleDelete}
					/>
				);
			})}
		</ul>
	) : null;
}
