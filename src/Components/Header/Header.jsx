import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to={routes.home}>
          <img src={window.location.origin + "/images/LogoDB.jpg"} alt="Logo" />
        </Link>
        <br />
        <br />
        <Link to={routes.home}>
          <p className={styles.p}>Un destino, mil recuerdos</p>
        </Link>
      </div>
      <div className={styles.container}>
        <Link to={routes.register}>
          <button className={styles.buttons}>Crear Cuenta</button>
        </Link>
        <Link to={routes.login}>
          <button className={styles.buttons}>Iniciar Sesión</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
