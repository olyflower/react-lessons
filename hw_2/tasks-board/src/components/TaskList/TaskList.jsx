import React, { useEffect, useState } from "react";
import { STATUS } from "../../constants/status";
import TaskCard from "../TaskCard/TaskCard";
import { Container } from "../Style/Style";

export default function TaskList({ list: propsList = [] }) {
	const [list, setList] = useState(propsList);
	const [countToDo, setCountToDo] = useState(0);
	const [countInProgress, setCountInProgress] = useState(0);
	const [countDone, setCountDone] = useState(0);

	const toDo = list.filter((item) => item.status === STATUS.TODO.value);
	const inProgress = list.filter(
		(item) => item.status === STATUS.IN_PROGRESS.value
	);
	const done = list.filter((item) => item.status === STATUS.DONE.value);

	const buttonInProgress = (id) => {
		setList((prevList) =>
			prevList.map((item) =>
				item.id === id
					? { ...item, status: STATUS.IN_PROGRESS.value }
					: item
			)
		);
	};

	const buttonToDo = (id) => {
		setList((prevList) =>
			prevList.map((item) =>
				item.id === id ? { ...item, status: STATUS.TODO.value } : item
			)
		);
	};

	const buttonDone = (id) => {
		setList((prevList) =>
			prevList.map((item) =>
				item.id === id ? { ...item, status: STATUS.DONE.value } : item
			)
		);
	};

	const buttonToArchive = (id) => {
		setList((prevList) => prevList.filter((item) => item.id !== id));
	};

	useEffect(() => {
		setCountToDo(toDo.length);
		setCountInProgress(inProgress.length);
		setCountDone(done.length);
	}, [list]);

	return (
		<>
			<Container>
				<TaskCard
					title={`${STATUS.TODO.label}: ${countToDo}`}
					tasks={toDo}
					btns={[{ title: STATUS.TODO.label, fn: buttonInProgress }]}
				/>
				<TaskCard
					title={`${STATUS.IN_PROGRESS.label}: ${countInProgress}`}
					tasks={inProgress}
					btns={[
						{ title: STATUS.IN_PROGRESS.label, fn: buttonToDo },
						{ title: STATUS.DONE.label, fn: buttonDone },
					]}
				/>
				<TaskCard
					title={`${STATUS.DONE.label}: ${countDone}`}
					tasks={done}
					btns={[{ title: STATUS.DONE.label, fn: buttonToArchive }]}
				/>
			</Container>
		</>
	);
}
