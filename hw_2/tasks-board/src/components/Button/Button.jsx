import React from "react";
import { Btn } from "../Style/Style";

export default function Button({ buttonLabel, onClickHandler }) {
	return <Btn onClick={onClickHandler}>{buttonLabel}</Btn>;
}
