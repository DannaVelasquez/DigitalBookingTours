import React from "react";
import styles from "./Searchbar.module.css";

const Searchbar = () => {
  return (
    <section className={styles.bar}>
      <h1>Busca nuevas experiencias, tours y mucho más</h1>
      <form className={styles.form}>
        <input
          className={styles.input}
          placeholder="En que lugar quieres tu experiencia?"
          type="text"
        />
        <input
          className={styles.input}
          placeholder=".Fecha Inicio - Fecha Fin"
          type="text"
        />
        <button className={styles.button}>Buscar</button>
      </form>
    </section>
  );
};

export default Searchbar;
