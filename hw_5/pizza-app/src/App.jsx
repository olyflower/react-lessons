import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Menu from "./pages/Menu/Menu";
import NoPage from "./pages/NoPage/NoPage";
import AuthProvider from "./context/context";

function App() {
	return (
		<>
			<AuthProvider>
				<Router>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/login" element={<Login />} />
						<Route path="/menu" element={<Menu />} />
						<Route path="*" element={<NoPage />} />
					</Routes>
				</Router>
			</AuthProvider>
		</>
	);
}

export default App;
