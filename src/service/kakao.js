import Repository from "./repository";
const { Kakao } = window;

const repository = new Repository();

class AuthKakao {
  loginKakao(goToHome, date) {
    Kakao.Auth.login({
      success: function (authObj) {
        repository.firebaseRepository(authObj.access_token, date);
        goToHome();
      },
      fail: function (err) {
        console.log(err);
      },
    });
  }
}

export default AuthKakao;
