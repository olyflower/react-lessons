import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import service from "../../services/services";

const initialState = {
	items: [],
};

export const getData = createAsyncThunk("menu/getData", async () => {
	const response = await service.get();
	return response.data;
});

const menuSlice = createSlice({
	name: "menu",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getData.fulfilled, (state, action) => {
			state.items = action.payload;
		});
	},
});

export default menuSlice.reducer;
export const selectMenuItems = (state) => state.menu.items;
