import React from "react";
import styles from "./styles.module.css";

export default function Box(props) {
  return (
    <div className={styles.box}>
      <div className={styles.fig}>
        <img src={props.image} className="w-full" />
      </div>

      <div className={styles.text}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.subtext}>{props.description}</p>
      </div>
    </div>
  );
}
