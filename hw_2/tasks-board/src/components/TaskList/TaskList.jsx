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

	const buttonLabels = {
		inProgress: STATUS.IN_PROGRESS.label,
		toDo: STATUS.TODO.label,
		done: STATUS.DONE.label,
		toArchive: STATUS.IN_ARCHIVE.label,
	};

	return (
		<>
			<Container>
				<TaskCard
					title={`${STATUS.TODO.label}: ${countToDo}`}
					tasks={toDo}
					buttonLabels={buttonLabels}
					buttonInProgress={buttonInProgress}
				/>
				<TaskCard
					title={`${STATUS.IN_PROGRESS.label}: ${countInProgress}`}
					tasks={inProgress}
					buttonLabels={buttonLabels}
					buttonToDo={buttonToDo}
					buttonDone={buttonDone}
				/>
				<TaskCard
					title={`${STATUS.DONE.label}: ${countDone}`}
					tasks={done}
					buttonLabels={buttonLabels}
					buttonToArchive={buttonToArchive}
				/>
			</Container>
		</>
	);
}
