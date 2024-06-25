import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import { CardContent } from "../Style/Style";

export default function TaskCard({ title, tasks, btns }) {
	return (
		<CardContent>
			<h2>{title}</h2>
			<ul>
				{tasks.map((item, index) => (
					<TaskItem key={index} item={item} btns={btns} />
				))}
			</ul>
		</CardContent>
	);
}
