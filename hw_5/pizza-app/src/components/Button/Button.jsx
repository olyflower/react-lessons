import React from "react";
import style from "../../components/Button/Button.module.css";

export default function Button({ type = "button", children, onClick }) {
	return (
		<button type={type} className={style.button} onClick={onClick}>
			{children}
		</button>
	);
}
