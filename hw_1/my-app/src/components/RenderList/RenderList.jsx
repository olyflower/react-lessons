import React, { useState } from "react";

import List from "../List/List";
import { animals } from "../../data/data";

export default function RenderList() {
	const [list, setList] = useState(animals);

	const handleDelete = (item) => {
		const newList = list.filter((animal) => animal !== item);
		setList(newList);
	};
	return (
		<>
			<List list={list} handleDelete={handleDelete} />
		</>
	);
}
