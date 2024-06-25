import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	gap: 20px;
	flex-wrap: wrap;
	margin: 20px;
`;

export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 19px;
	border: 1px solid green;
	width: 350px;
	padding: 15px;
`;

export const Btn = styled.button`
	border: 1px solid grey;
	margin-left: 10px;
	background-color: lightgray;
	margin-bottom: 5px;
`;

export const Li = styled.li`
	margin-bottom: 5px;
`;
