import React from "react";
import styles from "./Recom.module.css";
import Card from "../Card/Card";

const Recom = () => {
  const myArray = [
    {
      id: 1,
      nombre: "San Rafael, Mendoza",
      descipcion:
        "El turismo es una actividad que aporta múltiples beneficios, tanto para los viajeros como para las comunidades locales y la economía en general.",
    },
    {
      id: 2,
      nombre: "Roma, Italia",
      descipcion:
        "El turismo es una actividad que aporta múltiples beneficios, tanto para los viajeros como para las comunidades locales y la economía en general.",
    },
    {
      id: 3,
      nombre: "San Paulo, Brasil",
      descipcion:
        "El turismo es una actividad que aporta múltiples beneficios, tanto para los viajeros como para las comunidades locales y la economía en general.",
    },
    {
      id: 4,
      nombre: "Tokio, Japón",
      descipcion:
        "El turismo es una actividad que aporta múltiples beneficios, tanto para los viajeros como para las comunidades locales y la economía en general.",
    },
  ];

  return (
    <section className={styles.recom}>
      <h3 className={styles.h3}>Recomendaciones</h3>
      {myArray.map((value) => (
        <Card key={value.id} name={value.nombre} id={value.id} />
      ))}
    </section>
  );
};

export default Recom;
