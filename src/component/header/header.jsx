import React, { memo } from "react";
import styles from "./header.module.css";
import { faHippo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

const Header = memo(({ auth }) => {
  const history = useHistory();
  const onClickSignOut = () => {
    if (localStorage.getItem("naverUser")) {
      localStorage.removeItem("naverUser");
      window.open("http://nid.naver.com/nidlogin.logout", "popup");
      history.replace("/");
    } //
    else if (localStorage.getItem("kakaoUser")) {
      localStorage.removeItem("kakaoUser");
    } //
    else if (localStorage.getItem("googleUser")) {
      localStorage.removeItem("googleUser");
      auth.googleSignOut();
      history.replace("/");
    }
  };
  return (
    <div className={styles.logo}>
      {auth && (
        <button className={styles.singOutBtn} onClick={onClickSignOut}>
          {localStorage.getItem("kakaoUser") ? (
            <a
              className={styles.signOutLink}
              onClick={onClickSignOut}
              href={`https://kauth.kakao.com/oauth/logout?client_id=${process.env.REACT_APP_KAKAO_KEY}&logout_redirect_uri=${process.env.REACT_APP_KAKAO_URL}`}
            >
              Logout
            </a>
          ) : (
            "Logout"
          )}
        </button>
      )}
      <FontAwesomeIcon icon={faHippo} />
      <span>Diet Calendar</span>
    </div>
  );
});

export default Header;
