import React from "react";
import Button from "../../components/Button/Button";
import { useRedirect } from "../../hooks/useRedirect";
import style from "../../pages/NoPage/NoPage.module.css";

export default function NoPage() {
	const redirectToLogin = useRedirect("/login");

	return (
		<div className={style.container}>
			<h1>404</h1>
			<h4>Page not found</h4>
			<Button onClick={redirectToLogin}>Back to Home page</Button>
		</div>
	);
}
