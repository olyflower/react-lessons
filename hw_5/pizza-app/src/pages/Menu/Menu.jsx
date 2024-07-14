import React, { useState, useEffect } from "react";
import MenuList from "../../components/MenuList/MenuList";
import service from "../../services/services";

export default function Menu() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const response = await service.get();
			setData(response.data);
		};

		getData();
	}, []);

	return (
		<>
			<MenuList data={data} />
		</>
	);
}
