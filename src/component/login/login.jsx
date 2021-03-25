import React from "react";
import styles from "./login.module.css";
import { useHistory } from "react-router-dom";
import Header from "../header/header";

const Login = ({ auth }) => {
  const history = useHistory();
  const catchHistory = (user) => {
    localStorage.setItem("user", user);
    history.push("/Home");
  };
  const clickGoogle = () => {
    auth
      .googleAuth()
      .then((res) => {
        localStorage.setItem("user", res.user.uid);
        history.push("/Home");
      })
      .catch((err) => console.log(err));
  };
  const clickGithub = () => {
    auth
      .githubAuth(catchHistory)
      .then((res) => {
        localStorage.setItem("user", res.user.uid);
        history.push("/Home");
      })
      .catch((err) => console.log(err));
  };
  const clickFacebook = () => {
    auth
      .facebookAuth(catchHistory) //
      .then((res) => {
        localStorage.setItem("user", res.user.uid);
        history.push("/Home");
      });
  };

  return (
    <section className={styles.container}>
      <div className={styles.loginCotaniner}>
        <Header />
        <div className={styles.imgBox}>
          <img src="./img/1.jpg" alt="workout" />
        </div>
        <div className={styles.btnBox}>
          <button onClick={clickGoogle} className={styles.btn}>
            Google
          </button>
          <button className={styles.btn} onClick={clickGithub}>
            Github
          </button>
          <button className={styles.btn} onClick={clickFacebook}>
            Facebook
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
