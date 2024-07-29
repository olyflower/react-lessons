import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../redux/slices/searchSlice";
import Input from "../Input/Input";
import style from "../Search/Search.module.css";

export default function Search() {
	const dispatch = useDispatch();
	const searchQuery = useSelector((state) => state.search.query);

	const handleSearchChange = (e) => {
		dispatch(setSearchQuery(e.target.value));
	};

	return (
		<div className={style.search}>
			<Input
				placeholder="Search for pizza..."
				value={searchQuery}
				onChange={handleSearchChange}
				style={{ backgroundColor: "rgb(217 222 152 / 49%)" }}
			/>
		</div>
	);
}
