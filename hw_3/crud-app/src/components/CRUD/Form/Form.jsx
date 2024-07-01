import React, { useState } from "react";
import services from "../../../services/service";

export default function Form({ liftingNewItem }) {
	const [newItem, setNewItem] = useState({
		title: "New Title",
		completed: true,
	});

	const handleItemTitle = (e) => {
		setNewItem((prevnewItem) => ({
			...prevnewItem,
			title: e.target.value,
		}));
	};

	const handleItemStatus = (e) => {
		setNewItem((prevnewItem) => ({
			...prevnewItem,
			completed: e.target.value === "completed" ? true : false,
		}));
	};

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		try {
			const response = await services.post(newItem);

			setNewItem({ title: "New Title", completed: true });
			liftingNewItem(response);
		} catch (err) {
			console.log(err);
		}
	};

	const handleResetForm = () => {
		setNewItem({
			title: "New Title",
			completed: true,
		});
	};

	return (
		<form onSubmit={onSubmitHandler}>
			<label>
				Title{" "}
				<input
					type="text"
					value={newItem.title}
					onChange={handleItemTitle}
				/>
			</label>

			<fieldset>
				<legend>Choose status</legend>
				<label>
					Completed
					<input
						type="radio"
						name="status"
						value="true"
						checked={newItem.completed}
						onChange={handleItemStatus}
					/>
				</label>
				<label>
					Not completed
					<input
						type="radio"
						name="status"
						value="false"
						onChange={handleItemStatus}
					/>
				</label>
			</fieldset>

			<button type="submit">Add new ToDo</button>
			<button type="reset" onClick={handleResetForm}>
				Reset
			</button>
		</form>
	);
}
