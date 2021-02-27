import React, { useEffect, useRef } from "react";
import styles from "./login.module.css";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../header/header";

const Login = ({ auth }) => {
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

  const clickKakao = () => {
    auth.loginKakao(goToHome);
  };
  const clickNaver = (e) => {
    e.preventDefault();
    naverRef.current.firstChild.click();
  };

  const getNaverToken = async () => {
    if (!location.hash) return;
    const token = location.hash.split("=")[1].split("&")[0];
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
            className={styles.naverLogin}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Login;
