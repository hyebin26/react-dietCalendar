import Auth from "../auth";
import { firebaseAuth, googleProvider } from "../firebase";

jest.mock("../firebase");

// env가 작성안됬을 때도 돌아가는 테스트 ?

describe("Firebase Auth", () => {
  it("google auth test", () => {
    const signUpWithPopup = jest.fn();
    firebaseAuth.signUpWithPopup = signUpWithPopup;
  });
});
