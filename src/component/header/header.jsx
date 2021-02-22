import React from "react";
import styles from "./header.module.css";
import { faHippo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = (props) => {
  return (
    <div className={styles.logo}>
      <FontAwesomeIcon icon={faHippo} />
      <span>Diet Calendar</span>
    </div>
  );
};

export default Header;
