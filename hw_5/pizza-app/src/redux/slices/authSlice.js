import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAuth: false,
	userName: "",
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action) => {
			state.isAuth = true;
			state.userName = action.payload.userName;
		},
		logout: (state) => {
			state.isAuth = false;
			state.userName = "";
		},
	},
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
