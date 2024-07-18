import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
	totalPrice: 0,
	totalItems: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const cartItem = state.items.find(
				(item) => item.id === action.payload.id
			);

			if (!cartItem) {
				state.items.push({ ...action.payload, quantity: 1 });
			} else {
				cartItem.quantity += 1;
			}
		},

		deleteFromCart: (state, action) => {
			state.items = state.items.filter(
				(item) => item.id !== action.payload.id
			);
		},

		incrementQuantity: (state, action) => {
			const cartItem = state.items.find(
				(item) => item.id === action.payload.id
			);
			if (cartItem) {
				cartItem.quantity += 1;
			}
		},

		decrementQuantity: (state, action) => {
			const cartItem = state.items.find(
				(item) => item.id === action.payload.id
			);
			if (cartItem && cartItem.quantity > 1) {
				cartItem.quantity -= 1;
			} else {
				state.items = state.items.filter(
					(item) => item.id !== action.payload.id
				);
			}
		},

		clearCart: (state) => {
			state.items = [];
		},
	},
});

export default cartSlice.reducer;
export const {
	addToCart,
	deleteFromCart,
	incrementQuantity,
	decrementQuantity,
	clearCart,
} = cartSlice.actions;
