const { Kakao } = window;

class AuthKakao {
  loginKakao(goToHome) {
    Kakao.Auth.login({
      success: function (authObj) {
        fetch(process.env.KAKAO_URL, {
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
