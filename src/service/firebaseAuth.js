import firebase from "./firebase";

class AuthFirebase {
  googleAuth() {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider);
  }
  githubAuth() {
    const githubProvider = new firebase.auth.GithubAuthProvider();
    return firebase.auth().signInWithPopup(githubProvider);
  }
  onAuthChange(goToHome) {
    firebase.auth().onAuthStateChanged((user) => {
      goToHome(user);
    });
  }
  signOut() {
    return firebase.auth().signOut();
  }
}

export default AuthFirebase;
