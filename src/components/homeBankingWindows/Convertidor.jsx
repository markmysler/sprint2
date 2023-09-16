import { useEffect, useState } from "react";

function Convertidor() {
	const [rates, setRates] = useState(0);
	const [userInput, setUserInput] = useState(1);

	useEffect(() => {
		fetch("https://open.er-api.com/v6/latest/USD")
			.then((res) => res.json())
			.then((res) => setRates(res["rates"]));
	}, []);
	return (
		<div className="cotizacionesPage">
			<h1>Conversion</h1>
			<input
				type="number"
				placeholder="Monto en AR$"
				onChange={(e) => setUserInput(e.target.value)}
				className="conversionInput"
			/>
			<h3>En dolares: {(userInput / rates["ARS"]).toFixed(2)}</h3>
			<h3>
				En Euros:{" "}
				{((userInput / rates["ARS"]) * rates["EUR"]).toFixed(2)}
			</h3>
		</div>
	);
}

export default Convertidor;
