import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	flex-wrap: wrap;
	margin: 20px;
	border: 1px solid grey;
	padding: 10px;
`;

export const Btn = styled.button`
	border: 1px solid grey;
	margin-left: 15px;
	background-color: lightgray;
	margin-bottom: 8px;
	margin-top: 8px;
`;

export const BtnAdd = styled.button`
	border: 1px solid green;
	margin-left: 15px;
	background-color: lightgreen;
	margin-bottom: 8px;
`;

export const Input = styled.input`
	margin-left: 10px;
`;

export const Label = styled.label`
	font-weight: bold;
`;
