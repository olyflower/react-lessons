import React, { memo } from "react";
import useList from "../../../hooks/useList";
import {
	Container,
	Btn,
	BtnAdd,
	Input,
	Label,
} from "../../../style/style";
import { FaTrash, FaRegSave } from "react-icons/fa";

export default memo(function List({ newItem, color, filter }) {
	const [
		filteredList,
		deleteToDo,
		handleEditCheckbox,
		handleEditTitle,
		handleSubmitEditTitle,
	] = useList(newItem, filter);

	return (
		<Container>
			<h2>ToDo:</h2>
			{filteredList.length ? (
				<ul style={{ color: color }}>
					{filteredList.map((item, index) => (
						<li key={index}>
							{item.title}
							<input
								type="checkbox"
								checked={item.completed}
								onChange={(e) =>
									handleEditCheckbox(
										item.id,
										e.target.checked
									)
								}
							/>
							<Btn onClick={() => deleteToDo(item.id)}>
								<FaTrash />
							</Btn>
							<form
								onSubmit={(e) =>
									handleSubmitEditTitle(e, item.id)
								}
							>
								<Label>
									Edit title
									<Input
										type="text"
										onChange={(e) =>
											handleEditTitle(e.target.value)
										}
										defaultValue={item.title}
									/>
								</Label>
								<BtnAdd type="submit">
									<FaRegSave />
								</BtnAdd>
							</form>
						</li>
					))}
				</ul>
			) : (
				<p>No tasks found</p>
			)}
		</Container>
	);
});
