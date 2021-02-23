import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./component/login/login";
import Home from "./component/home/home";
import Calendar from "./component/calendar/calendar";

function App({ authFirebase, authNaver, authKakao }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login
          authFirebase={authFirebase}
            authNaver={authNaver}
            authKakao={authKakao}
          />
        </Route>
        <Route path="/Home" component={Home} />
        <Route path="/Calendar" component={Calendar} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
