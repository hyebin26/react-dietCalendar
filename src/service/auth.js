import { googleProvider, firebaseAuth, facebookProvider } from "./firebase";

class Auth {
  googleAuth() {
    const googleAuthProvider = googleProvider;
    return firebaseAuth.signInWithPopup(googleAuthProvider);
  }
  facebookAuth() {
    return firebaseAuth
      .signInWithPopup(facebookProvider)
      .catch((err) => console.log(err));
    // .catch(function (error) {
    //   if (error.code === "auth/account-exists-with-different-credential") {
    //     firebaseAuth
    //       .fetchSignInMethodsForEmail(error.email)
    //       .then(function (providers) {
    //         if (providers[0] === "google.com") {
    //           firebaseAuth
    //             .signInWithRedirect(googleProvider)
    //             .then(function (result) {
    //               firebaseAuth
    //                 .signInWithCredential(result.credential)
    //                 .then((user) => {
    //                   user.linkWithCredential(error.credential);
    //                 });
    //             });
    //         }
    //       });
    //   } else {
    //     alert("에러!");
    //   }
    // });
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
