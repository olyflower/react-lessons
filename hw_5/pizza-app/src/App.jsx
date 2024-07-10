import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Menu from "./pages/Menu/Menu";
import NoPage from "./pages/NoPage/NoPage";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/menu" element={<Menu />} />
					<Route path="*" element={<NoPage />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
