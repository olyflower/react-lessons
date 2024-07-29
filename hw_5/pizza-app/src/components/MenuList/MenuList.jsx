import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import style from "../../components/MenuList/MenuList.module.css";

export default function MenuList({ data }) {
	return (
		<div className={style.container}>
			<div className={style.wrapper}>
				<ul>
					{data.map((item) => (
						<MenuItem item={item} key={item.id} />
					))}
				</ul>
			</div>
		</div>
	);
}
