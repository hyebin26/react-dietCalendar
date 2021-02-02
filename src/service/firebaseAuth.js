import firebase from "./firebase";

class AuthFirebase {
  googleAuth(target) {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider);
  }
  githubAuth() {
    const githubProvider = new firebase.auth.GithubAuthProvider();
    return firebase.auth().signInWithPopup(githubProvider);
  }
}

export default AuthFirebase;
