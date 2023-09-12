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
		<>
			<h1>Log in</h1>
			<form onSubmit={(e) => handleLogin(e)}>
				<input type="email" placeholder="Email" name="email" />
				<input type="password" placeholder="Password" name="password" />
				<button>Log In</button>
			</form>
		</>
	);
}

export default Login;
