import React from "react";
import styles from "./Recom.module.css";
import Card from "../Card/Card";
import { useContextGlobal } from "../GlobalContext/global.context";

const Recom = () => {
  const { tourState } = useContextGlobal();

  return (
    <section className={styles.recom}>
      <h3 className={styles.h3}>Recomendaciones</h3>
      <div className={styles.grid}>
      {tourState.tourList.map((tour) =>
        <Card tour={tour}/>
      )}
      </div>
    </section>
  );
};

export default Recom;

