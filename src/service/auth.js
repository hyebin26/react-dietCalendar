import { googleProvider, firebaseAuth } from "./firebase";

const { naver } = window;
const { Kakao } = window;

class Auth {
  googleAuth() {
    const googleAuthProvider = googleProvider;
    return firebaseAuth.signInWithPopup(googleAuthProvider);
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
          headers: { Authorization: `Beaer ${result.access_token}` },
          redirect: "follow",
        });
      }) //
      .then((token) => token);
  }
  async kakaoLogout() {
    return await fetch(
      `kauth.kakao.com/oauth/logout?client_id=${process.env.REACT_APP_KAKAO_KEY}&logout_redirect_uri=${process.env.REACT_APP_KAKAO_URL}`
    );
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
  async fetchNaverToken(code) {
    return await fetch("https://openapi.naver.com/v1/nid/me", {
      method: "GET",
      headers: { Authorization: `Bearer ${code}` },
      redirect: "follow",
    }).then((res) => res.json());
  }

  signOut() {
    return firebaseAuth.signOut();
  }
  onAuthChange(goToHome) {
    firebaseAuth.onAuthStateChanged((user) => {
      goToHome(user);
    });
  }
}

export default Auth;
