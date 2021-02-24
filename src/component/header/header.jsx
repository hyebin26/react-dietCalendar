import React from "react";
import styles from "./header.module.css";
import { faHippo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

const Header = ({ authFirebase }) => {
  const history = useHistory();
  const onClickSignOut = () => {
    authFirebase
      .signOut()
      .then(() => {
        history.push("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={styles.logo}>
      {authFirebase && (
        <button className={styles.singOutBtn} onClick={onClickSignOut}>
          Sign Out
        </button>
      )}
      <FontAwesomeIcon icon={faHippo} />
      <span>Diet Calendar</span>
    </div>
  );
};

export default Header;
