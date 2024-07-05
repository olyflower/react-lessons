import { API } from "../constants/constants";

const service = {
	post: async (obj) => {
		try {
			const request = await fetch(API, {
					method: "POST",
					body: JSON.stringify(obj),
					headers: {
						"Content-type": "application/json",
					},
				}),
				response = await request.json();
			return response;
		} catch (err) {
			console.log(err);
		}
	},

	get: async (id) => {
		try {
			const request = await fetch(id ? API + `/${id}` : API),
				response = await request.json();
			return response;
		} catch (err) {
			console.log(err);
		}
	},

	patch: async (id, obj) => {
		try {
			const request = await fetch(API + `/${id}`, {
					method: "PATCH",
					body: JSON.stringify(obj),
					headers: {
						"Content-type": "application/json",
					},
				}),
				response = await request.json();
			return response;
		} catch (err) {
			console.log(err);
		}
	},

	delete: async (id) => {
		try {
			await fetch(API + `/${id}`, {
				method: "DELETE",
			});
		} catch (err) {
			console.log(err);
		}
	},
};

export default service;
