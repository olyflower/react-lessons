import React from "react";
import style from "../../components/Input/Input.module.css";

export default function Input({
	type = "text",
	placeholder,
	value,
	onChange,
	style: customStyle = {},
}) {
	return (
		<input
			className={style.input}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			style={customStyle}
		/>
	);
}
