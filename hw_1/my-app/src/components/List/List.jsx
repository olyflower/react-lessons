import React from "react";
import ListItem from "./ListItem";

export default function List({ list = [], handleDelete }) {
	return list.length > 0 ? (
		<ul>
			{list.map((item, index) => (
				<ListItem key={index} item={item} handleDelete={handleDelete} />
			))}
		</ul>
	) : null;
}
