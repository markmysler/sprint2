import { useNavigate } from "react-router-dom";

function HomeBanking({ user, setUser }) {
	const navigate = useNavigate();
	const handleLogOut = () => {
		navigate("/");
		setUser({});
	};
	return (
		<>
			<h1>Home Banking</h1>
			{user ? <h3>Bienvenido/a {user.name}</h3> : ""}
			{user ? <h4>Balance de la cuenta: {user.balance}</h4> : ""}

			<button type="button" onClick={() => handleLogOut()}>
				Log Out
			</button>
		</>
	);
}

export default HomeBanking;
