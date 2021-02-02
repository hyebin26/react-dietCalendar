import firebase from "./firebase";

class AuthFirebase {
  googleAuth(target) {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  }
}

export default AuthFirebase;
