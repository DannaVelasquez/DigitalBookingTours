import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css"

const Card = ({ tour }) => {
  return (
    <div className={styles.card}>
      <img
        className="card-img"
        src={tour.image}
        alt="Turismo"
        width={200}
      />
      <Link
        key={tour.id}
        to={"/detail/" + tour.id}
        className="button-detail"
        title="Details"
      >
        {tour.name}
      </Link>
      <h2>{tour.house}</h2>
    </div>
  );
};

export default Card;
