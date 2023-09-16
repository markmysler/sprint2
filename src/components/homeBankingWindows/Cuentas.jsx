import "./homeBankingWindows.css";
function Cuentas({ user }) {
	return (
		<div className="cuentaPage">
			<h1>Tu Cuenta</h1>
			{user ? (
				<div className="cuentaImgDiv">
					<img className="cuentaImg" src="../src/assets/logo.png" />
				</div>
			) : (
				""
			)}
			{user ? (
				<h3>
					Bienvenido/a {user.name} {user.lastName}
				</h3>
			) : (
				""
			)}
			{user ? <h4>{user.email}</h4> : ""}
			{user ? <h4>Balance de la cuenta: ${user.balance}</h4> : ""}
		</div>
	);
}

export default Cuentas;
