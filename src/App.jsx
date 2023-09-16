import Inicio from "./components/Inicio";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useNavigate,
} from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useEffect, useState } from "react";
import HomeBanking from "./components/HomeBanking";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	const [user, setUser] = useState();

	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/login" element={<Login setUser={setUser} />} />
				<Route path="/signup" element={<SignUp setUser={setUser} />} />
				<Route
					path="/home"
					element={<HomeBanking user={user} setUser={setUser} />}
				/>
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
