import React, { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./linkButton.module.css";

const LinkButton = memo((props) => {
  return (
    <Link to="/Home" className={styles.link}>
      하루 칼로리 설정하기
    </Link>
  );
});

export default LinkButton;
