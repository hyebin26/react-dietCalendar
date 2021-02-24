import React from "react";
import styles from "./header.module.css";
import { faHippo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

const Header = ({ auth }) => {
  const history = useHistory();
  const onClickSignOut = () => {
    auth
      .signOut()
      .then(() => {
        history.push("/");
      })
      .catch((err) => console.log(err));
  };
  // const onClickKakao = () => {
  //   authKakao.logOutKakao();
  // };
  return (
    <div className={styles.logo}>
      {auth && (
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
