import { API } from "../constants/constants";

const service = {
	get: async (id) => {
		try {
			const request = await fetch(id ? `${API}/${id}` : API);
			if (!request.ok) {
				throw new Error(`Error status: ${request.status}`);
			}
			const response = await request.json();
			return response;
		} catch (err) {
			console.log(err);
		}
	},
};

export default service;
