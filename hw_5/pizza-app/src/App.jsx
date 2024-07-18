import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import NoPage from "./pages/NoPage/NoPage";
import Layout from "./components/Layout/Layout";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Login />} />
						<Route path="login" element={<Login />} />
						<Route path="menu" element={<Menu />} />
						<Route path="cart" element={<Cart />} />
					</Route>
					<Route path="*" element={<NoPage />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
