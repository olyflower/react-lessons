import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import menuSlice from "./slices/menuSlice";
import searchSlice from "./slices/searchSlice";
import cartSlice from "./slices/cartSlice";
import orderSlice from "./slices/orderSlice";

export const store = configureStore({
	reducer: {
		auth: authSlice,
		menu: menuSlice,
		search: searchSlice,
		cart: cartSlice,
		orders: orderSlice,
	},
});
