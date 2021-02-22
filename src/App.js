import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./component/login/login";
import Home from "./component/home/home";
import Calendar from "./component/calendar/calendar";

function App({ authFirebase }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login authFirebase={authFirebase} />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Calendar">
          <Calendar />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
