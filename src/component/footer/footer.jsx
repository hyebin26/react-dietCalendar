import React, { memo } from "react";
import styles from "./footer.module.css";

const Footer = memo((props) => {
  return (
    <div className={styles.container}>
      <span>Footer</span>
    </div>
  );
});

export default Footer;
