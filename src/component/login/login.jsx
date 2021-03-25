import React from "react";
import styles from "./login.module.css";
import { useHistory } from "react-router-dom";
import Header from "../header/header";

const Login = ({ auth }) => {
  const history = useHistory();

  const clickGoogle = () => {
    auth
      .googleAuth()
      .then((res) => {
        localStorage.setItem("user", res.user.uid);
        history.push("/Home");
      })
      .catch((err) => console.log(err));
  };
  const clickEmail = () => {
    auth.emailAuth().then((res) => console.log(res));
  };
  const clickFacebook = () => {
    auth
      .facebookAuth() //
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
          <button className={styles.btn} onClick={clickEmail}>
            E-mail
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
