import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import Repository from "./service/repository";
import Auth from "./service/auth";

const repository = new Repository();
const auth = new Auth();

ReactDOM.render(
  <React.StrictMode>
    <App auth={auth} repository={repository} />
  </React.StrictMode>,
  document.getElementById("root")
);
