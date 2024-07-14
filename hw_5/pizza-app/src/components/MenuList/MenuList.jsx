import React, { useState, useEffect } from "react";
import MenuItem from "../MenuItem/MenuItem";
import Header from "../Header/Header";
import service from "../../services/services";
import style from "../../components/MenuList/MenuList.module.css";

export default function MenuList() {
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
			<Header />
			<div className={style.container}>
				<div className={style.wrapper}>
					<ul>
						{data.map((item, index) => (
							<MenuItem item={item} key={index} />
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
