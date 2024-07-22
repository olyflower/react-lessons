import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	orders: [],
};

const ordersSlice = createSlice({
	name: "orders",
	initialState,
	reducers: {
		addOrder: (state, action) => {
			state.orders.push(action.payload);
		},
	},
});

export default ordersSlice.reducer;
export const { addOrder } = ordersSlice.actions;
