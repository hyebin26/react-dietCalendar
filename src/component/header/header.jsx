import React, { memo } from "react";
import styles from "./header.module.css";
import { faHippo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

const Header = memo(({ auth }) => {
  const history = useHistory();
  const onClickSignOut = () => {
    localStorage.removeItem("googleUser");
    auth.googleSignOut();
    history.replace("/");
  };
  return (
    <div className={styles.logo}>
      {auth && (
        <button className={styles.singOutBtn} onClick={onClickSignOut}>
          Logout
        </button>
      )}
      <FontAwesomeIcon icon={faHippo} />
      <span>Diet Calendar</span>
    </div>
  );
});

export default Header;
