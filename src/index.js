import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Repository from "./service/repository";
import Auth from "./service/auth";

const repository = new Repository();
const auth = new Auth();

ReactDOM.render(
  <App auth={auth} repository={repository} />,
  document.getElementById("root")
);
