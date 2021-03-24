import { googleProvider, firebaseAuth } from "./firebase";

const { naver } = window;
const { Kakao } = window;

class Auth {
  constructor() {
    this.url = "http://localhost:8080";
  }
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
    return await fetch(`${this.url}/kakaoToken/${code}`) //
      .then((result) => result.json());
  }
  kakaoSignOut() {
    return `https://kauth.kakao.com/oauth/logout?client_id=${process.env.REACT_APP_KAKAO_KEY}&logout_redirect_uri=${process.env.REACT_APP_KAKAO_URL}`;
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
    return await fetch(`${this.url}/naverToken/${code}`) //
      .then((result) => result.json());
  }

  googleSignOut() {
    return firebaseAuth.signOut();
  }
  onAuthChange(goToHome) {
    firebaseAuth.onAuthStateChanged((user) => {
      goToHome(user);
    });
  }
}

export default Auth;
