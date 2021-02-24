import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./component/login/login";
import Home from "./component/home/home";
import Calendar from "./component/calendar/calendar";

function App({ authFirebase, authNaver, authKakao, repository }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login
            authFirebase={authFirebase}
            authNaver={authNaver}
            authKakao={authKakao}
            repository={repository}
          />
        </Route>
        <Route path="/Home">
          <Home authFirebase={authFirebase} />
        </Route>
        <Route path="/Calendar">
          <Calendar repository={repository} authFirebase={authFirebase} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
