import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AuthFirebase from "./service/firebaseAuth";

const authFirebase = new AuthFirebase();

ReactDOM.render(
  <React.StrictMode>
    <App authFirebase={authFirebase} />
  </React.StrictMode>,
  document.getElementById("root")
);
