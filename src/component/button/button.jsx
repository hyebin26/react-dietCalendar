import React from "react";
import styles from "./button.module.css";

const Button = ({ value, clickGoogle, clickGithub }) => {
  return (
    <button
      onClick={clickGoogle ? clickGoogle : clickGithub}
      className={styles.btn}
    >
      {value}
    </button>
  );
};

export default Button;
