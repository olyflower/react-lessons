import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import style from "../../pages/Login/Login.module.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

export default function Login() {
	const [userName, setUserName] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handlerSubmit = (e) => {
		e.preventDefault();
		if (userName) {
			dispatch(login({ userName: userName }));
			navigate("/menu");
		}
	};
	return (
		<div className={style.container}>
			<div className={style.wrapper}>
	
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
