import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import authSlice from "./slices/authSlice";
import menuSlice from "./slices/menuSlice";
import orderSlice from "./slices/orderSlice";

export const store = configureStore({
	reducer: {
		auth: authSlice,
		menu: menuSlice,
		cart: cartSlice,
		orders: orderSlice,
	},
});
