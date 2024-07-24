import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addOrder } from "../../redux/slices/orderSlice";
import { useRedirect } from "../../hooks/useRedirect";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button/Button";
import style from "../Order/NewOrder.module.css";

const validationSchema = Yup.object({
	name: Yup.string().required("Required"),
	phone: Yup.string()
		.matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number")
		.required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
	address: Yup.string().required("Required"),
});

export default function NewOrder() {
	const totalPrice = useSelector((store) => store.cart.totalPrice);
	const dispatch = useDispatch();
	const redirectToOrder = useRedirect("/order");

	const handleSubmit = (values, { resetForm }) => {
		const newOrder = {
			...values,
			totalPrice,
			id: Date.now(),
		};

		dispatch(addOrder(newOrder));
		redirectToOrder();
		resetForm();
	};

	return (
		<div className={style.container}>
			<h1>Ready to order? Let's go!</h1>
			<Formik
				initialValues={{
					name: "",
					phone: "",
					email: "",
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
							Email:
							<Field
								type="email"
								name="email"
								placeholder="Enter email"
							/>
						</label>
						<ErrorMessage name="email" component="p" />
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
