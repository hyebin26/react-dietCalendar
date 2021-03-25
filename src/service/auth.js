import { googleProvider, firebaseAuth, firebaseLogout } from "./firebase";

const { naver } = window;
const { Kakao } = window;

class Auth {
  googleAuth() {
    const googleAuthProvider = googleProvider;
    return firebaseAuth.signInWithPopup(googleAuthProvider);
  }

  googleSignOut() {
    firebaseAuth.signOut();
  }
  onAuthChange(goToHome) {
    firebaseAuth.onAuthStateChanged((user) => {
      goToHome(user);
    });
  }
}

export default Auth;
