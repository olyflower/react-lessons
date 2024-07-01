import React, { useState } from "react";
import List from "./List/List";
import FormCreate from "./FormCreate/FormCreate";

export default function CRUD() {
	const [newItem, setNewItem] = useState();
	return (
		<>
			<FormCreate liftingNewItem={setNewItem} />
			<List newItem={newItem} />
		</>
	);
}
