import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import Header from "../Header/Header";
import style from "../../components/MenuList/MenuList.module.css";

export default function MenuList({ data }) {
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
