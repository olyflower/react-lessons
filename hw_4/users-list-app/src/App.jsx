import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import UsersDetail from "./pages/UserDetail";
import NoPage from "./pages/NoPage";
import "./App.css";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/users" element={<Users />} />
					<Route path="/users/:id" element={<UsersDetail />} />
					<Route path="*" element={<NoPage />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
