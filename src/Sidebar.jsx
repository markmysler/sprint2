import React, { useState } from 'react';
import './sideBar.css'; 
import logo from "./logo.png"
import punto from "./punto.png"

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleMenu = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div id="sidemenu" className={collapsed ? 'menu-collapsed' : 'menu-expanded'}>
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
            <div id="photo"><img src={logo} alt="Foto de perfil" /></div>
            <div id="sideMenuName">Iniciar sesión para navegar</div>
            <div id="saldoSideBar"></div>
        </div>
        
        {/* Elementos del menú */}
        <div id="menu-items">
            <MenuItem icon={punto} title="Cuentas" onClick={() => toggleMenu('cuentas')} disabled={true} />
            <MenuItem icon={punto} title="Transferencias" onClick={() => toggleMenu('transferencias')} disabled={true} />
            <MenuItem icon={punto} title="Pagos" onClick={() => toggleMenu('pagos')} disabled={true} />
            <MenuItem icon={punto} title="Cálculo de préstamos" onClick={() => toggleMenu('prestamos')} disabled={true} />
            <MenuItem icon={punto} title="Convertidor de moneda" onClick={() => toggleMenu('convertidor')} disabled={true} />
            <div className="item-separator"></div>
            <MenuItem icon={punto} title="Cerrar sesión" onClick={logOut} disabled={true} />
        </div>
        </div>
    );
};

export default Sidebar;

    function MenuItem({ icon, title, onClick, disabled }) {
    return (
        <button type="button" className="item" onClick={onClick} disabled={disabled}>
        <a href="#">
            <div className="icon"><img src={icon} alt={`Icono de ${title}`} /></div>
            <div className="title"><span>{title}</span></div>
        </a>
        </button>
    );
}

function logOut() {
  // Lógica para cerrar sesión
}