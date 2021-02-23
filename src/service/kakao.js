const { Kakao } = window;

class AuthKakao {
  loginKakao(goToHome) {
    Kakao.Auth.login({
      success: function (authObj) {
        fetch("http://localhost:3000", {
          method: "POST",
          body: JSON.stringify({
            access_token: authObj.access_token,
          }),
        }) //
          .then((res) => res.json())
          .then((resjson) => goToHome());
      },
      fail: function (err) {
        console.log(err);
      },
    });
  }
}

export default AuthKakao;
