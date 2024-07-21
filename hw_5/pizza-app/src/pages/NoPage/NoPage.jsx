import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import style from "../../pages/NoPage/NoPage.module.css";

export default function NoPage() {
	const navigate = useNavigate();

	const handlerRedirectLogin = () => {
		navigate("/login");
	};

	return (
		<div className={style.container}>
			<h1>404</h1>
			<h4>Page not found</h4>
			<Button onClick={handlerRedirectLogin}>Back to Home page</Button>
		</div>
	);
}
