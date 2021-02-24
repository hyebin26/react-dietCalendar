import Repository from "./repository";
const { Kakao } = window;

const repository = new Repository();

class AuthKakao {
  loginKakao(goToHome, date) {
    Kakao.Auth.loginForm({
      success: function (authObj) {
        repository.firebaseRepository(authObj.access_token, date);
        goToHome();
        return authObj;
      },
      fail: function (err) {
        console.log(err);
      },
    });
  }
  logOutKakao() {
    Kakao.Auth.logout();
  }
}

export default AuthKakao;
