import { API_DATA, API_ORDER } from "../constants/constants";

const service = {
	get: async (id) => {
		try {
			const request = await fetch(id ? `${API_DATA}/${id}` : API_DATA);
			if (!request.ok) {
				throw new Error(`Error status: ${request.status}`);
			}
			const response = await request.json();
			return response;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	post: async (obj) => {
		try {
			const request = await fetch(API_ORDER, {
				method: "POST",
				body: JSON.stringify(obj),
				headers: {
					"Content-type": "application/json",
				},
			});
			if (!request.ok) {
				throw new Error(`Error status: ${request.status}`);
			}
			const response = await request.json();
			return response;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},

	patch: async (id, updateData) => {
		try {
			const request = await fetch(`${API_ORDER}/${id}`, {
				method: "PATCH",
				body: JSON.stringify(updateData),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (!request.ok) {
				throw new Error(`Error status: ${request.status}`);
			}
			const response = await request.json();
			return response;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
};

export default service;
