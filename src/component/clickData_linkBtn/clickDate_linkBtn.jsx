import React, { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./clickDate_linkBtn.module.css";

const ClickDataLinkBtn = memo(() => {
  return (
    <Link to="/Home" className={styles.link}>
      하루 칼로리 설정하기
    </Link>
  );
});

export default ClickDataLinkBtn;
