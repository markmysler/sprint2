import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
	const navigate = useNavigate();
	const handleLogin = (e) => {
		e.preventDefault();
		const data = new FormData(e.target);
		const userInfo = window.localStorage.getItem(data.get("email"));
		if (userInfo !== null) {
			setUser(JSON.parse(userInfo));
			navigate("/home");
		} else {
			alert("User not found");
		}
	};

	return (
		<div className="loginPage">
			<h1>Iniciar Sesion</h1>
			<form onSubmit={(e) => handleLogin(e)} className="loginForm">
				<input type="email" placeholder="Email" name="email" />
				<input type="password" placeholder="Password" name="password" />
				<button>Ingresar</button>
			</form>
		</div>
	);
}

export default Login;
