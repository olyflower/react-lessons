import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import service from "../../services/services";

const initialState = {
	orders: [],
	status: "idle",
	error: null,
};

export const createOrder = createAsyncThunk(
	"orders/createOrder",
	async (orderData, { rejectWithValue }) => {
		try {
			const response = await service.post(orderData);
			if (!response || response.error) {
				return rejectWithValue(
					response.error || "Something went wrong"
				);
			}
			return response;
		} catch (error) {
			return rejectWithValue("Something went wrong");
		}
	}
);

export const updateOrderPriority = createAsyncThunk(
	"orders/updateOrderPriority",
	async ({ id, priority }, { rejectWithValue }) => {
		try {
			const response = await service.patch(id, { priority });
			if (!response || response.error) {
				return rejectWithValue(
					response.error || "Something went wrong"
				);
			}
			return response;
		} catch (error) {
			return rejectWithValue("Something went wrong");
		}
	}
);

const ordersSlice = createSlice({
	name: "orders",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(createOrder.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(createOrder.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.orders.push(action.payload.data);
			})
			.addCase(createOrder.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			.addCase(updateOrderPriority.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(updateOrderPriority.fulfilled, (state, action) => {
				state.status = "succeeded";
				const updatedOrder = action.payload.data;
				const index = state.orders.findIndex(
					(order) => order.id === updatedOrder.id
				);
				if (index !== -1) {
					state.orders[index] = updatedOrder;
				}
			})
			.addCase(updateOrderPriority.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			});
	},
});

export default ordersSlice.reducer;
