import firebase from "./firebase";
import Repository from "./repository";

const { naver } = window;
const { Kakao } = window;

const repository = new Repository();

class Auth {
  googleAuth() {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider);
  }
  githubAuth() {
    const githubProvider = new firebase.auth.GithubAuthProvider();
    return firebase.auth().signInWithPopup(githubProvider);
  }
  loginKakao(goToHome) {
    Kakao.Auth.loginForm({
      success: function (authObj) {
        const token = authObj.access_token;
        goToHome(token);
      },
      fail: function (err) {
        console.log(err);
      },
    });
  }
  initializeNaverLogin() {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: process.env.NAVER_URL,
      callbackUrl: process.env.NAVER_ID,
      isPopup: true,
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
