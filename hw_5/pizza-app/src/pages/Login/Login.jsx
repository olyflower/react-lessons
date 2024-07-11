import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/context";
import style from "../../pages/Login/Login.module.css";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

export default function Login() {
	const [userName, setUserName] = useState("");
	const { login } = useContext(AuthContext);
	const navigate = useNavigate();

	const handlerSubmit = (e) => {
		e.preventDefault();
		if (userName) {
			login(userName);
			navigate("/menu");
		}
	};
	return (
		<div className={style.container}>
			<div className={style.wrapper}>
				<Header />
				<div className={style.content}>
					<h1 className={style.title}>
						The best pizza.
						<br />
						<span className={style.text__yellow}>
							Straight out of the oven, straight to you.
						</span>
					</h1>
					<p className={style.sub__title}>
						👋 Welcome! Please start by telling us your name:
					</p>
					<form
						className={style.login__form}
						onSubmit={handlerSubmit}
					>
						<Input
							type="text"
							placeholder="Your full name"
							onChange={(e) => setUserName(e.target.value)}
						/>
						<Button>Login</Button>
					</form>
				</div>
			</div>
		</div>
	);
}
