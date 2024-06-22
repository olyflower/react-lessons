import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import { CardContent } from "../Style/Style";

export default function TaskCard({
	title,
	tasks,
	buttonLabels,
	buttonInProgress,
	buttonToDo,
	buttonDone,
	buttonToArchive,
}) {
	return (
		<CardContent>
			<h2>{title}</h2>
			<ul>
				{tasks.map((item, index) => (
					<TaskItem
						key={index}
						item={item}
						buttonLabels={buttonLabels}
						buttonInProgress={buttonInProgress}
						buttonToDo={buttonToDo}
						buttonDone={buttonDone}
						buttonToArchive={buttonToArchive}
					/>
				))}
			</ul>
		</CardContent>
	);
}
