import React, { useEffect } from "react";
import styles from "./login.module.css";
import Button from "../button/button";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../header/header";

const Login = ({ authFirebase, authNaver, authKakao }) => {
  const history = useHistory();
  const location = useLocation();
  const goToHome = () => {
    history.push("/Home");
  };
  const clickGoogle = () => {
    authFirebase.googleAuth().then((res) => goToHome());
  };
  const clickGithub = () => {
    authFirebase.githubAuth().then((res) => goToHome());
  };
  const clickKakao = () => {
    authKakao.loginKakao(goToHome);
  };

  const getNaverToken = async () => {
    if (!location.hash) return;
    const token = location.hash.split("=")[1].split("&")[0];

    await fetch("/User/Naver", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((resjson) => goToHome(resjson));
  };

  useEffect(() => {
    authNaver.initializeNaverLogin();
    getNaverToken();
  }, []);
  return (
    <section className={styles.container}>
      <div className={styles.loginCotaniner}>
        <Header />
        <div className={styles.imgBox}>
          <img src="./img/1.jpg" alt="workout" />
        </div>
        <div className={styles.btnBox}>
          <Button clickGoogle={clickGoogle} value={"Google"} />
          <Button clickGithub={clickGithub} value={"Github"} />
          <button onClick={clickKakao}>Kakao</button>
          <div id="naverIdLogin"></div>
        </div>
      </div>
    </section>
  );
};

export default Login;
