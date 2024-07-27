import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import service from "../../services/services";

const initialState = {
	items: [],
	status: "idle",
	error: null,
};

export const getData = createAsyncThunk(
	"menu/getData",
	async (_, { rejectWithValue }) => {
		try {
			const response = await service.get();
			return response.data;
		} catch (error) {
			return rejectWithValue(error.message || "Failed to fetch data");
		}
	}
);

const menuSlice = createSlice({
	name: "menu",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getData.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(getData.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.items = action.payload;
			})
			.addCase(getData.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			});
	},
});

export default menuSlice.reducer;
export const selectMenu = (state) => state.menu;
