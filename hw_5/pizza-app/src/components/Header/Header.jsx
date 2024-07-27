import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useRedirect } from "../../hooks/useRedirect";
import style from "../../components/Header/Header.module.css";
import Button from "../Button/Button";

export default function Header() {
	const userName = useSelector((state) => state.auth.userName);
	const redirectToCart = useRedirect("/cart");

	return (
		<div className={style.header}>
			<Link className={style.logo} to="/">
				Pizza Day
			</Link>
			{userName && <p>Welcome, {userName}!</p>}
			<Button onClick={redirectToCart}>Cart</Button>
		</div>
	);
}
