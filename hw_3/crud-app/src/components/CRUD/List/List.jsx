import React, { useState, useEffect } from "react";
import services from "../../../services/service";

export default function List({ newItem }) {
	const [list, setList] = useState([]);
	const [newTitle, setNewTitle] = useState("");

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

	return (
		<div>
			<h2>ToDo:</h2>
			{list.length ? (
				<ul>
					{list.map((item, index) => (
						<li key={index}>
							{item.title}{" "}
							<input
								type="checkbox"
								defaultChecked={item.completed}
								onChange={(e) =>
									handleEditCheckbox(
										item.id,
										e.target.checked
									)
								}
							/>
							<button onClick={() => deleteToDo(item.id)}>
								Delete
							</button>
							<form
								onSubmit={(e) =>
									handleSubmitEditTitle(e, item.id)
								}
							>
								<label>
									Edit title
									<input
										type="text"
										onChange={(e) =>
											handleEditTitle(e.target.value)
										}
										defaultValue={item.title}
									/>
								</label>
								<button type="submit">Save</button>
							</form>
						</li>
					))}
				</ul>
			) : (
				<p>No tasks found</p>
			)}
		</div>
	);
}