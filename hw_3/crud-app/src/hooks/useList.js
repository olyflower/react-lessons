import React, { useState, useEffect, useMemo } from "react";
import services from "../services/service";
import {
	LIST_FILTER_COMPLETED,
	LIST_FILTER_PROGRESS,
} from "../constants/constants";

export default function useList(newItem, filter) {
	const [list, setList] = useState([]);
	const [newTitle, setNewTitle] = useState("");
	const [filteredList, setFilteredList] = useState([]);

	useEffect(() => {
		if (newItem) {
			setList((prevList) => [...prevList, newItem]);
		}
	}, [newItem]);

	const getToDos = async () => {
		const response = await services.get();
		setList(response);
	};

	useEffect(() => {
		getToDos();
	}, []);

	useMemo(() => {
		list.sort((a, b) => b.completed - a.completed);
	}, [list]);

	useEffect(() => {
		setFilteredList(list);
	}, [list]);

	useEffect(() => {
		switch (filter) {
			case LIST_FILTER_COMPLETED:
				setFilteredList(list.filter((item) => item.completed));
				break;
			case LIST_FILTER_PROGRESS:
				setFilteredList(list.filter((item) => !item.completed));
				break;
			default:
				setFilteredList(list);
		}
	}, [filter, list]);

	const deleteToDo = async (id) => {
		try {
			await services.delete(id);

			setList((prevList) => prevList.filter((item) => id !== item.id));
		} catch (err) {
			console.log(err);
		}
	};

	const handleEditCheckbox = async (id, completed) => {
		try {
			const response = await services.patch(id, { completed });

			setList((prevList) =>
				prevList.map((item) => {
					if (item.id === response.id) item = response;
					return item;
				})
			);
		} catch (err) {
			console.log(err);
		}
	};

	const handleEditTitle = (e) => {
		setNewTitle(e);
	};

	const handleSubmitEditTitle = async (e, id) => {
		e.preventDefault();
		try {
			const response = await services.patch(id, { title: newTitle });

			setList((prevList) =>
				prevList.map((item) => {
					if (item.id === response.id) item = response;
					return item;
				})
			);
		} catch (err) {
			console.log(err);
		}
	};

	return [
		filteredList,
		deleteToDo,
		handleEditCheckbox,
		handleEditTitle,
		handleSubmitEditTitle,
	];
}
