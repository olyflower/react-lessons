import React from "react";
import { TaskButton } from "../Style/Style";

export default function Button({ buttonLabel, onClickHandler }) {
	return <TaskButton onClick={onClickHandler}>{buttonLabel}</TaskButton>;
}
