import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/context";
import style from "../../components/Header/Header.module.css";
import Input from "../../components/Input/Input";

export default function Header() {
	const { user } = useContext(AuthContext);

	return (
		<div className={style.header}>
			<Link className={style.logo} to="/">
				Pizza Day
			</Link>
			<form>
				<Input placeholder="Search for the order #" />
			</form>
			{user && <p>{user}</p>}
		</div>
	);
}
