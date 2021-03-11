import firebase from "./firebase";

const { naver } = window;
const { Kakao } = window;

class Auth {
  googleAuth() {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider);
  }

  loginKakao() {
    Kakao.Auth.authorize({
      redirectUri: process.env.REACT_APP_KAKAO_URL,
    });
  }
  async fetchToken(code) {
    const requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    return await fetch(
      `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_URL}&code=${code}`,
      requestOptions
    )
      .then((res) => res.json())
      .then((result) => {
        return fetch("https://kapi.kakao.com/v2/user/me", {
          method: "GET",
          headers: result.access_token,
          redirect: "follow",
        });
      }) //
      .then((token) => token);
  }
  initializeNaverLogin() {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: process.env.REACT_APP_NAVER_ID,
      callbackUrl: process.env.REACT_APP_NAVER_URL,
      isPopup: false,
      loginButton: { color: "green", type: 1, height: 30 },
      callbackHandlke: true,
    });
    naverLogin.init();
  }

  signOut() {
    return firebase.auth().signOut();
  }
  onAuthChange(goToHome) {
    firebase.auth().onAuthStateChanged((user) => {
      goToHome(user);
    });
  }
}

export default Auth;
