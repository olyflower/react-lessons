import React, { useState } from "react";
import List from "./List/List";
import Form from "./Form/Form";

export default function CRUD() {
	const [newItem, setNewItem] = useState();
	return (
		<>
			<Form liftingNewItem={setNewItem} />
			<List newItem={newItem} />
		</>
	);
}
