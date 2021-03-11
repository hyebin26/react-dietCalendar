import React, { useEffect, useRef, useState } from "react";
import styles from "./login.module.css";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../header/header";

const Login = ({ auth, repository }) => {
  const history = useHistory();
  const location = useLocation();
  const naverRef = useRef();

  const goToHome = (userId) => {
    history.push({
      pathname: "/Home",
      state: { userId: userId },
    });
  };
  const clickGoogle = () => {
    auth.googleAuth().then((res) => goToHome(res.user.uid));
  };

  const clickKakao = (e) => {
    auth.loginKakao();
  };
  const clickNaver = (e) => {
    e.preventDefault();
    naverRef.current.firstChild.click();
  };

  const getNaverToken = () => {
    if (!location.hash) return;
    const token = location.hash.split("=")[1].split("&")[0];
    if (token) {
      return false;
    }
  };

  const onClickNaver = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    auth.initializeNaverLogin();
    getNaverToken();
  }, []);

  useEffect(() => {
    auth.onAuthChange((user) => {
      user && goToHome(user.uid);
    });
  }, [auth]);

  useEffect(() => {
    const code = new URLSearchParams(location.search).get("code");
    let kakaoToken;
    if (code === undefined) {
      return false;
    }
    auth.fetchToken(code).then((res) => goToHome(res.id));
  }, []);
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
          <button onClick={clickKakao} className={styles.btn}>
            Kakao
          </button>
          <button onClick={clickNaver} className={styles.btn}>
            Naver
          </button>
          <div
            id="naverIdLogin"
            ref={naverRef}
            onClick={onClickNaver}
            className={styles.naverLogin}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Login;
