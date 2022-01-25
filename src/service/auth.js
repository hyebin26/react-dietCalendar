import {
  googleProvider,
  firebaseAuth,
  facebookProvider,
  githubProvider,
} from "./firebase";

class Auth {
  googleAuth() {
    return firebaseAuth
      .signInWithPopup(googleProvider) // 
      .catch((err) => {
        console.log(err);
        return alert("다른계정을 이용해주세요");
      });
  }
  facebookAuth(catchHistory) {
    return firebaseAuth
      .signInWithPopup(facebookProvider)
      .catch(function (error) {
        if (error.code === "auth/account-exists-with-different-credential") {
          firebaseAuth
            .fetchSignInMethodsForEmail(error.email)
            .then(function (providers) {
              if (providers[0] === "google.com") {
                firebaseAuth
                  .signInWithPopup(googleProvider)
                  .then(function (result) {
                    firebaseAuth
                      .signInWithCredential(result.credential)
                      .then((user) => {
                        catchHistory(user.user.uid);
                      });
                  });
              }
            });
        } else {
          alert("다른 계정을 이용해주세요");
        }
      });
  }
  githubAuth(catchHistory) {
    return firebaseAuth
      .signInWithPopup(githubProvider) //
      .catch(function (error) {
        if (error.code === "auth/account-exists-with-different-credential") {
          firebaseAuth
            .fetchSignInMethodsForEmail(error.email)
            .then(function (providers) {
              if (providers[0] === "google.com") {
                firebaseAuth
                  .signInWithPopup(googleProvider)
                  .then(function (result) {
                    firebaseAuth
                      .signInWithCredential(result.credential)
                      .then((user) => {
                        catchHistory(user.user.uid);
                      });
                  });
              }
            });
        } else {
          alert("다른 계정을 이용해주세요");
        }
      });
  }

  signOut() {
    firebaseAuth.signOut();
  }
}

export default Auth;
