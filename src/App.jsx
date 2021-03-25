import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./app.css";
import Login from "./component/login/login";
import Home from "./component/home/home";
import Calendar from "./component/calendar/calendar";

function App({ repository, auth }) {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
