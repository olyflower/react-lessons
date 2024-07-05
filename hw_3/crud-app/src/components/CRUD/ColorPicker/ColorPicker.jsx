import React, { memo } from "react";
import { Input } from "../../../style/style";

export default memo(function ColorPicker({ color, setColor }) {
	const handleChangeColor = (e) => {
		setColor(e.target.value);
	};
	
	return (
		<Input type="color" defaultValue={color} onChange={handleChangeColor} />
	);
});
