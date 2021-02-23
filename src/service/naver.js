const { naver } = window;

class Naver {
  initializeNaverLogin() {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: process.env.NAVER_URL,
      callbackUrl: process.env.NAVER_ID,
      isPopup: true,
      loginButton: { color: "green", type: 1, height: 30 },
      callbackHandlke: true,
    });
    naverLogin.init();
  }
}

export default Naver;
