import React, { useEffect, useState } from "react";
import {
	STATUS_TODO,
	STATUS_IN_PROGRESS,
	STATUS_DONE,
} from "../../constants/status";
import classes from "../../components/TaskList/TaskList.module.css";

export default function TaskList({ list: propsList = [] }) {
	const [list, setList] = useState(propsList);
	const [countToDo, setCountToDo] = useState(0);
	const [countInProgress, setCountInProgress] = useState(0);
	const [countToArchive, setCountToArchive] = useState(0);

	const toDo = list.filter((item) => item.status === STATUS_TODO);
	const inProgress = list.filter(
		(item) => item.status === STATUS_IN_PROGRESS
	);
	const done = list.filter((item) => item.status === STATUS_DONE);

	const buttonInProgress = (id) => {
		setList((prevList) =>
			prevList.map((item) =>
				item.id === id ? { ...item, status: STATUS_IN_PROGRESS } : item
			)
		);
	};

	const buttonToDo = (id) => {
		setList((prevList) =>
			prevList.map((item) =>
				item.id === id ? { ...item, status: STATUS_TODO } : item
			)
		);
	};

	const buttonDone = (id) => {
		setList((prevList) =>
			prevList.map((item) =>
				item.id === id ? { ...item, status: STATUS_DONE } : item
			)
		);
	};

	const buttonToArchive = (id) => {
		setList((prevList) => prevList.filter((item) => item.id !== id));
	};

	useEffect(() => {
		setCountToDo(toDo.length);
		setCountInProgress(inProgress.length);
		setCountToArchive(done.length);
	}, [list]);

	return (
		<>
			<div className={classes.container}>
				<div className={classes.content}>
					<h2>To Do: {countToDo}</h2>
					<ul>
						{toDo.map((item) => (
							<li key={item.id}>
								{item.title}
								<button
									onClick={() => buttonInProgress(item.id)}
								>
									In progress
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className={classes.content}>
					<h2>In Progress: {countInProgress}</h2>
					<ul>
						{inProgress.map((item) => (
							<li key={item.id}>
								{item.title}{" "}
								<button onClick={() => buttonToDo(item.id)}>
									To Do
								</button>{" "}
								<button onClick={() => buttonDone(item.id)}>
									Done
								</button>
							</li>
						))}
					</ul>
				</div>

				<div className={classes.content}>
					<h2>Done: {countToArchive}</h2>
					<ul>
						{done.map((item) => (
							<li key={item.id}>
								{item.title}
								<button
									onClick={() => buttonToArchive(item.id)}
								>
									To archive
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
