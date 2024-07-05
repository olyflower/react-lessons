import React, {useState, useEffect} from "react";

export default function useLocalStorage(valueName, defaultValue) {
	const [value, setValue] = useState(
		localStorage.getItem(valueName)
			? JSON.parse(localStorage.getItem(valueName))
			: defaultValue
	);
	useEffect(() => {
		localStorage.setItem(valueName, JSON.stringify(value));
	}, [value]);

	return [value, setValue]
}
