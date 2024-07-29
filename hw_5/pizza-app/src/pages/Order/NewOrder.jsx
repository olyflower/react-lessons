import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button/Button";
import { createOrder } from "../../redux/slices/orderSlice";
import style from "../Order/NewOrder.module.css";

const validationSchema = Yup.object({
	name: Yup.string().required("Required"),
	phone: Yup.string()
		.matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number")
		.required("Required"),
	address: Yup.string().required("Required"),
});

export default function NewOrder() {
	const totalPrice = useSelector((store) => store.cart.totalPrice);
	const cartItems = useSelector((store) => store.cart.items);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = async (values, { resetForm }) => {
		const orderData = {
			customer: values.name,
			phone: values.phone,
			address: values.address,
			priority: values.priority,
			position: "",
			cart: cartItems.map((item) => ({
				pizzaId: item.id,
				name: item.name,
				quantity: item.quantity,
				unitPrice: item.unitPrice,
				totalPrice: item.quantity * item.unitPrice,
			})),
		};

		try {
			const result = await dispatch(createOrder(orderData));
			if (createOrder.fulfilled.match(result)) {
				navigate(`/order/${result.payload.data.id}`);
			} else {
				console.error("Something went wrong", result.payload);
			}
		} catch (error) {
			console.error("Error creating order", error);
		}

		resetForm();
	};

	return (
		<div className={style.container}>
			<h1>Ready to order? Let's go!</h1>
			<Formik
				initialValues={{
					name: "",
					phone: "",
					address: "",
					priority: false,
				}}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<Form>
					<div className={style.formGroup}>
						<label>
							Name:
							<Field
								type="text"
								name="name"
								placeholder="Enter name"
							/>
						</label>
						<ErrorMessage name="name" component="p" />
					</div>

					<div className={style.formGroup}>
						<label>
							Phone:
							<Field
								type="text"
								name="phone"
								placeholder="Enter phone number"
							/>
						</label>
						<ErrorMessage name="phone" component="p" />
					</div>

					<div className={style.formGroup}>
						<label>
							Address:
							<Field
								type="text"
								name="address"
								placeholder="Enter address"
							/>
						</label>
						<ErrorMessage name="address" component="p" />
					</div>

					<div className={style.formGroup}>
						<Field type="checkbox" id="priority" name="priority" />
						<label htmlFor="priority">
							Want to give your order priority?
						</label>
					</div>

					<Button type="submit">Order now for €{totalPrice}</Button>
				</Form>
			</Formik>
		</div>
	);
}
