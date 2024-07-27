import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
	totalPrice: 0,
	totalItems: 0,
};

const calculateTotals = (state) => {
	state.totalPrice = state.items.reduce(
		(total, item) => total + item.quantity * item.unitPrice,
		0
	);
	state.totalItems = state.items.reduce(
		(total, item) => total + item.quantity,
		0
	);
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

			calculateTotals(state);
		},

		deleteFromCart: (state, action) => {
			state.items = state.items.filter(
				(item) => item.id !== action.payload.id
			);

			calculateTotals(state);
		},

		incrementQuantity: (state, action) => {
			const cartItem = state.items.find(
				(item) => item.id === action.payload.id
			);
			if (cartItem) {
				cartItem.quantity += 1;
			}

			calculateTotals(state);
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

			calculateTotals(state);
		},

		clearCart: () => {
			return initialState;
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
