import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import authSlice from "./slices/authSlice";
import menuSlice from "./slices/menuSlice";

export const store = configureStore({
	reducer: {
		auth: authSlice,
		cart: cartSlice,
		menu: menuSlice,
	},
});
