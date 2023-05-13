import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, id }) => {
  return (
    <div className="card">
      <img
        className="card-img"
        src="/public/images/turismo.jpg"
        alt="Turismo"
        width={200}
      />
      <h2>{name}</h2>
      <Link
        key={id}
        to={`/detail/${id}`}
        className="button-detail"
        title="Details"
      >
        Detail
      </Link>
    </div>
  );
};

export default Card;
