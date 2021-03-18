import { Switch, Route, HashRouter } from "react-router-dom";
import "./App.css";
import Login from "./component/login/login";
import Home from "./component/home/home";
import Calendar from "./component/calendar/calendar";

function App({ auth, repository }) {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Login auth={auth} repository={repository} />
        </Route>
        <Route path="/Home">
          <Home auth={auth} />
        </Route>
        <Route path="/Calendar">
          <Calendar repository={repository} auth={auth} />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
