import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuList from "../../components/MenuList/MenuList";
import { getData } from "../../redux/slices/menuSlice";

export default function Menu() {
	const dispatch = useDispatch();
	const { items } = useSelector((store) => store.menu);

	useEffect(() => {
		dispatch(getData());
	}, [dispatch]);

	return (
		<>
			<MenuList data={items} />
		</>
	);
}
