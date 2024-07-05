import React from "react";
import {
	LIST_FILTER_ALL,
	LIST_FILTER_COMPLETED,
	LIST_FILTER_PROGRESS,
} from "../../../constants/constants";
import { Select } from "../../../style/style";

export default function Filter({ filter, setFilter }) {
	const handleSelect = (e) => {
		setFilter(e.target.value);
	};

	return (
		<Select defaultValue={filter} onChange={handleSelect}>
			<option value={LIST_FILTER_ALL}>All</option>
			<option value={LIST_FILTER_COMPLETED}>Completed</option>
			<option value={LIST_FILTER_PROGRESS}>In progress</option>
		</Select>
	);
}
