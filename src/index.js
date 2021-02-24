import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AuthFirebase from "./service/firebaseAuth";
import Naver from "./service/naver";
import AuthKakao from "./service/kakao";
import Repository from "./service/repository";

const authFirebase = new AuthFirebase();
const authNaver = new Naver();
const authKakao = new AuthKakao();
const repository = new Repository();

ReactDOM.render(
  <React.StrictMode>
    <App
      authFirebase={authFirebase}
      authNaver={authNaver}
      authKakao={authKakao}
      repository={repository}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
