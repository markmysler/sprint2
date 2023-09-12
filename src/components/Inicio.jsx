import { Link } from "react-router-dom";

function Inicio() {
	return (
		<>
			<h1>Inicio</h1>
			<button>
				<Link to="/login">Log In</Link>
			</button>
			<button>
				<Link to="/signup">Sign up</Link>
			</button>
		</>
	);
}

export default Inicio;
