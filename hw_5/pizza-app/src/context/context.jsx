import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
	const [user, setUser] = useState(null);

	const login = (userName) => {
		setUser(userName);
	};

	const context = {
		user: user,
		login: login,
	};

	return (
		<AuthContext.Provider value={context}>{children}</AuthContext.Provider>
	);
}
