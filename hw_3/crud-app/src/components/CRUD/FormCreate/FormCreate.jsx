import React, { useState } from "react";
import services from "../../../services/service";
import { Container, Btn, BtnAdd, Label } from "../../../style/style";

export default function FormCreate({ liftingNewItem }) {
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
		<Container>
			<form onSubmit={onSubmitHandler}>
				<Label>
					Title{" "}
					<input
						type="text"
						value={newItem.title}
						onChange={handleItemTitle}
					/>
				</Label>

				<fieldset>
					<legend>Choose status</legend>
					<Label>
						Completed
						<input
							type="radio"
							name="status"
							value="true"
							checked={newItem.completed}
							onChange={handleItemStatus}
						/>
					</Label>
					<Label>
						Not completed
						<input
							type="radio"
							name="status"
							value="false"
							onChange={handleItemStatus}
						/>
					</Label>
				</fieldset>

				<BtnAdd type="submit">Add new ToDo</BtnAdd>
				<Btn type="reset" onClick={handleResetForm}>
					Reset
				</Btn>
			</form>
		</Container>
	);
}
