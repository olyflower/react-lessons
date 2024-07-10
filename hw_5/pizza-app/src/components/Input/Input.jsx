import React from "react";
import style from "../../components/Input/Input.module.css";

export default function Input({ type = "text", placeholder, value, onChange }) {
	return (
		<input
			className={style.input}
			type={type}
			placeholder={placeholder}
			hvalue={value}
			onChange={onChange}
		/>
	);
}
