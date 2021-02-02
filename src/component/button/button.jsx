import React from "react";
import styles from "./button.module.css";

const Button = ({ value }) => {
  return <button className={styles.btn}>{value}</button>;
};

export default Button;
