import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuList from "../../components/MenuList/MenuList";
import Search from "../../components/Search/Search";
import { getData, selectMenu } from "../../redux/slices/menuSlice";
import { clearCart } from "../../redux/slices/cartSlice";
import style from "../Menu/Menu.module.css";

export default function Menu() {
	const dispatch = useDispatch();
	const { items, status, error } = useSelector(selectMenu);
	const searchQuery = useSelector((state) => state.search.query);

	useEffect(() => {
		if (status === "idle") {
			dispatch(getData());
		}
	}, [dispatch, status]);

	useEffect(() => {
		dispatch(clearCart());
	}, [dispatch]);

	const filteredItems = items.filter((item) =>
		item.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<div className={style.menu}>
			<Search />
			{status === "loading" && <p>Loading...</p>}
			{status === "failed" && <p>Error: {error}</p>}
			{status === "succeeded" && <MenuList data={filteredItems} />}
		</div>
	);
}
