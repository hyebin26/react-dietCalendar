import React from "react";
import styles from "./makeDate.module.css";

const MakeDate = ({ date }) => {
  return (
    <li className={styles.date}>
      <p className={styles.title}>{date}</p>
      <span className={styles.cal}>+500Cal</span>
    </li>
  );
};

export default MakeDate;
