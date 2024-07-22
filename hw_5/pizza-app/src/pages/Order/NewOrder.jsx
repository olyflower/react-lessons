import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addOrder } from "../../redux/slices/orderSlice";
import { useRedirect } from "../../hooks/useRedirect";
import Button from "../../components/Button/Button";
import style from "../Order/NewOrder.module.css";

export default function NewOrder() {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		address: "",
		priority: false,
	});

	const [errors, setErrors] = useState({
		name: "",
		phone: "",
		email: "",
		address: "",
	});

	const totalPrice = useSelector((store) => store.cart.totalPrice);
	const dispatch = useDispatch();
	const redirectToOrder = useRedirect("/order");

	const handleBlur = (event) => {
		const { name, value } = event.target;
		let error = "";

		if (name === "email" && value.trim() && !/\S+@\S+\.\S+/.test(value)) {
			error = "Invalid email";
		}

		if (
			name === "phone" &&
			value.trim() &&
			!/^\+?[1-9]\d{1,14}$/.test(value)
		) {
			error = "Invalid phone number";
		}

		setErrors((prevErrors) => ({
			...prevErrors,
			[name]: error,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formData);

		const newOrder = {
			...formData,
			totalPrice,
			id: Date.now(),
		};

		dispatch(addOrder(newOrder));

		redirectToOrder();

		setFormData({
			name: "",
			phone: "",
			email: "",
			address: "",
			priority: false,
		});
	};

	const handleChange = (event) => {
		const { name, value, type, checked } = event.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	return (
		<div className={style.container}>
			<h1>Ready to order? Let's go!</h1>
			<form onSubmit={handleSubmit}>
				<div className={style.formGroup}>
					<label>
						Name:
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="Enter name"
							required
						/>
					</label>
					{errors.name && <p>{errors.name}</p>}
				</div>

				<div className={style.formGroup}>
					<label>
						Phone:
						<input
							type="text"
							name="phone"
							value={formData.phone}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="Enter phone number"
							required
						/>
					</label>
					{errors.phone && <p>{errors.phone}</p>}
				</div>

				<div className={style.formGroup}>
					<label>
						Email:
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="Enter email"
							required
						/>
					</label>
					{errors.email && <p>{errors.email}</p>}
				</div>

				<div className={style.formGroup}>
					<label>
						Address:
						<input
							type="text"
							name="address"
							value={formData.address}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="Enter address"
							required
						/>
					</label>
					{errors.address && <p>{errors.address}</p>}
				</div>

				<div className={style.formGroup}>
					<input
						type="checkbox"
						id="priority"
						name="priority"
						checked={formData.priority}
						onChange={handleChange}
					/>
					<label htmlFor="priority">
						Want to give your order priority?
					</label>
				</div>

				<Button type="submit">Order now for €{totalPrice}</Button>
			</form>
		</div>
	);
}
