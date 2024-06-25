import React from "react";
import Button from "../../components/Button/Button";
import { Li } from "../Style/Style";

export default function TaskItem({ item, btns }) {
	return (
		<>
			<Li>
				{item.title}
				{btns.map((btn, index) => (
					<Button
						key={index}
						buttonLabel={btn.title}
						onClickHandler={() => btn.fn(item.id)}
					/>
				))}
			</Li>
		</>
	);
}
