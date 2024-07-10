import React from "react";
import { Link } from "react-router-dom";
import style from "../../components/Header/Header.module.css";
import Input from "../../components/Input/Input";

export default function Header() {
	return (
		<div className={style.header}>
			<Link className={style.logo} to="/">
				Pizza Day
			</Link>
			<form>
				<Input placeholder="Search for the order #" />
			</form>
		</div>
	);
}
