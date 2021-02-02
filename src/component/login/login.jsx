import React from "react";
import { faHippo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./login.module.css";
import Button from "../button/button";

const Login = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.loginCotaniner}>
        <div className={styles.logo}>
          <FontAwesomeIcon icon={faHippo} />
          <span>Diet Calendar</span>
        </div>
        <div className={styles.imgBox}>
          <img src="./img/1.jpg" alt="workout" />
        </div>
        <div className={styles.btnBox}>
          <Button value={"Google"} />
          <Button value={"Github"} />
          <Button value={"Naver"} />
          <Button value={"Kakao"} />
        </div>
      </div>
    </section>
  );
};

export default Login;
