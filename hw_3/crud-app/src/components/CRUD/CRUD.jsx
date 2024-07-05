import React, { useEffect, useState } from "react";
import List from "./List/List";
import FormCreate from "./FormCreate/FormCreate";
import ColorPicker from "./ColorPicker/ColorPicker";
import Filter from "./Filter/Filter";
import { LIST_FILTER_ALL, DEFAULT_COLOR } from "../../constants/constants";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function CRUD() {
	const [newItem, setNewItem] = useState();
	const [color, setColor] = useLocalStorage("color", DEFAULT_COLOR);
	const [filter, setFilter] = useLocalStorage("filter", LIST_FILTER_ALL);

	return (
		<>
			<FormCreate liftingNewItem={setNewItem} />
			<ColorPicker color={color} setColor={setColor} />
			<Filter filter={filter} setFilter={setFilter} />
			<List newItem={newItem} color={color} filter={filter} />
		</>
	);
}
