import React from "react";
import Button from "../../components/Button/Button";
import { Li } from "../Style/Style";

export default function TaskItem({
	item,
	buttonLabels,
	buttonInProgress,
	buttonToDo,
	buttonDone,
	buttonToArchive,
}) {
	return (
		<>
			<Li>
				{item.title}
				{buttonInProgress && (
					<Button
						item={item}
						buttonLabel={buttonLabels.inProgress}
						onClickHandler={() => buttonInProgress(item.id)}
					/>
				)}
				{buttonToDo && (
					<Button
						item={item}
						buttonLabel={buttonLabels.toDo}
						onClickHandler={() => buttonToDo(item.id)}
					/>
				)}
				{buttonDone && (
					<Button
						item={item}
						buttonLabel={buttonLabels.done}
						onClickHandler={() => buttonDone(item.id)}
					/>
				)}
				{buttonToArchive && (
					<Button
						item={item}
						buttonLabel={buttonLabels.toArchive}
						onClickHandler={() => buttonToArchive(item.id)}
					/>
				)}
			</Li>
		</>
	);
}
