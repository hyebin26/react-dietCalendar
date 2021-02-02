import React from "react";
import styles from "./button.module.css";

const Button = ({ value, clickGoogle }) => {
  return (
    <button onClick={clickGoogle} className={styles.btn}>
      {value}
    </button>
  );
};

export default Button;
