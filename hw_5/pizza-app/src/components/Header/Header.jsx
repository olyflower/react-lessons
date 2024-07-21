import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "../../components/Header/Header.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Header() {
	const navigate = useNavigate();
	const userName = useSelector((state) => state.auth.userName);
	const handleNavigateToCart = () => {
		navigate('/cart')
	}
	return (
		<div className={style.header}>
			<Link className={style.logo} to="/">
				Pizza Day
			</Link>
			<form>
				<Input placeholder="Search for the order #" />
			</form>
			{userName && <p>{userName}</p>}
			<Button onClick={handleNavigateToCart}>Cart</Button>
		</div>
	);
}
