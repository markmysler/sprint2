import React, { useEffect, useState } from "react";
import "./sideBar.css";
import logo from "../assets/logo.png";
import punto from "../assets/punto.png";
import { useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";

const Sidebar = ({ setUser, user, page, setPage }) => {
	const [collapsed, setCollapsed] = useState(true);
	const navigate = useNavigate();
	const switchView = (view) => {
		setPage(view);
		toggleMenu();
	};
	const toggleMenu = () => {
		setCollapsed(!collapsed);
	};

	function handleLogOut() {
		setUser({});
	}
	useEffect(() => {
		if (!user || Object.keys(user).length === 0) {
			navigate("/");
		}
	}, [user, setUser]);

	return (
		<div
			id="sidemenu"
			className={collapsed ? "menu-collapsed" : "menu-expanded"}
		>
			{/* Encabezado */}
			<div id="header">
				<div id="menu-btn" onClick={toggleMenu}>
					<div className="btn-hamburger"></div>
					<div className="btn-hamburger"></div>
					<div className="btn-hamburger"></div>
				</div>
			</div>

			{/* Perfil */}
			<div id="profile">
				<div id="photo">
					<img src={logo} alt="Foto de perfil" />
				</div>
				<div id="sideMenuName">
					{user
						? user.name + " " + user.lastName
						: "Iniciar sesión para navegar"}
				</div>
				<div id="saldoSideBar">${user ? user.balance : ""}</div>
			</div>

			{/* Elementos del menú */}
			<div id="menu-items">
				<MenuItem
					icon={punto}
					title="Cuentas"
					onClick={() => switchView("cuentas")}
					disabled={false}
				/>
				<MenuItem
					icon={punto}
					title="Transferencias"
					onClick={() => switchView("transferencias")}
					disabled={false}
				/>
				<MenuItem
					icon={punto}
					title="Pagos"
					onClick={() => switchView("pagos")}
					disabled={false}
				/>
				<MenuItem
					icon={punto}
					title="Cálculo de préstamos"
					onClick={() => switchView("prestamos")}
					disabled={false}
				/>
				<MenuItem
					icon={punto}
					title="Convertidor de moneda"
					onClick={() => switchView("convertidor")}
					disabled={false}
				/>
				<div className="item-separator"></div>
				<MenuItem
					icon={punto}
					title="Cerrar sesión"
					onClick={handleLogOut}
					disabled={false}
				/>
			</div>
		</div>
	);
};

export default Sidebar;
