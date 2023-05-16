import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
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

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const paramsId = useParams();

  const idSelected = myArray.find((v) => paramsId.id == v.id);

  console.log("soy params de details");
  console.log(paramsId);
  console.log(idSelected.descipcion);
  return <div>{idSelected.descipcion}</div>;
};

export default Detail;
