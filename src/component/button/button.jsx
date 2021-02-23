import React from "react";
import styles from "./button.module.css";

const Button = ({ value, clickGoogle, clickGithub, clickNaver }) => {
  return (
    <button
      onClick={clickGoogle ? clickGoogle : clickNaver}
      className={styles.btn}
    >
      {value}
    </button>
  );
};

export default Button;
