import React, { useCallback } from "react";
import styles from "./login.module.css";
import { useHistory } from "react-router-dom";
import Header from "../header/header";

const Login = ({ auth }) => {
  const history = useHistory();

  const goToHome = useCallback(
    (userId) => {
      history.push({
        pathname: "/Home",
        state: { userId: userId },
      });
    },
    [history]
  );
  const clickGoogle = () => {
    auth.googleAuth().then((res) => {
      localStorage.setItem("googleUser", res.user.uid);
      goToHome(res.user.uid);
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
        </div>
      </div>
    </section>
  );
};

export default Login;
