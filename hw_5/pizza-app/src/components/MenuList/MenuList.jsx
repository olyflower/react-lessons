import React from "react";
import pizzas from "../../services/data";
import MenuItem from "../MenuItem/MenuItem";
import Header from "../Header/Header"
import style from "../../components/MenuList/MenuList.module.css";

export default function MenuList() {
	return (
		<>
			<Header />
			<div className={style.container}>
				<div className={style.wrapper} >
					<ul>
						{pizzas.map((item, index) => (
							<MenuItem item={item} key={index} />
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
