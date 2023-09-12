import { useNavigate } from "react-router-dom";

function SignUp({ setUser }) {
	const navigate = useNavigate();
	const handleSignUp = (e) => {
		e.preventDefault();
		const data = new FormData(e.target);
		const name = data.get("name");
		const lastName = data.get("lastName");
		const email = data.get("email");
		const password = data.get("password");
		const confirmPassword = data.get("confirmPassword");
		if (password === confirmPassword) {
			const userData = {
				name: name,
				lastName: lastName,
				email: email,
				password: password,
				balance: 0,
			};
			if (window.localStorage.getItem(userData.email) !== null) {
				console.log("El mail ya pertenece a una cuenta");
			} else {
				window.localStorage.setItem(
					userData.email,
					JSON.stringify(userData)
				);
				console.log("cuenta creada");
				setUser(userData);
				navigate("/home");
			}
		} else {
			alert("Las contraseñas deben ser iguales");
		}
	};
	return (
		<>
			<h1>Sign up</h1>
			<form onSubmit={(e) => handleSignUp(e)}>
				<input type="text" name="name" placeholder="Nombre" />
				<input type="text" name="lastName" placeholder="Apellido" />
				<input type="email" name="email" placeholder="Email" />
				<input
					type="password"
					name="password"
					placeholder="Contraseña"
				/>
				<input
					type="password"
					name="confirmPassword"
					placeholder="Confirmar contraseña"
				/>
				<button>Sign up</button>
			</form>
		</>
	);
}

export default SignUp;
