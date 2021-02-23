const { naver } = window;

class Naver {
  initializeNaverLogin() {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: "94mrN6UXO2wJbGNzZXiB",
      callbackUrl: "http://localhost:3000/",
      isPopup: true,
      loginButton: { color: "green", type: 1, height: 30 },
      callbackHandlke: true,
    });
    naverLogin.init();
  }
}

export default Naver;
