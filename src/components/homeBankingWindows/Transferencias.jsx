function Transferencias({ user }) {
	function handleSubmit(e) {
		e.preventDefault();
		const { monto, destinatario } = e.target;
		if (user.balance >= monto.value) {
			user.balance = user.balance - monto.value;
			window.localStorage.removeItem(user.email);
			window.localStorage.setItem(user.email, JSON.stringify(user));
			alert("Transferencia enviada a " + destinatario.value);
			monto.value = "";
			destinatario.value = "";
			return;
		} else {
			alert("Saldo insuficiente");
			return;
		}
	}
	return (
		<>
			<h1 id="transferenciasH1">Transferencias</h1>
			<form
				className="transferenciasForm"
				onSubmit={(e) => handleSubmit(e)}
			>
				<input type="number" placeholder="Monto" name="monto" />
				<input
					type="text"
					placeholder="Destinatario"
					name="destinatario"
				/>
				<button>Enviar</button>
			</form>
		</>
	);
}

export default Transferencias;
