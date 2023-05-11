import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";

const Header = () => {

    return (
        <div className="header">
            <div className="header-container">
            <Link to={routes.home}>
            <img src={window.location.origin + "/images/LogoDB.jpg"} alt="Logo"/>
            </Link>
            <br/>
            <br/>
            <Link to={routes.home}>
            <p>Un destino, mil recuerdos</p>
            </Link>
            </div>
            <div className="header-container">
            <Link to={routes.register}>
                <button className="button-header">Crear Cuenta</button>
            </Link>
            <Link to={routes.login}>
                <button className="button-header">Iniciar Sesión</button>
            </Link>
            </div>
        </div>
    )
}

export default Header;

