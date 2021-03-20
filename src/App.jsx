import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./component/login/login";
import Home from "./component/home/home";
import Calendar from "./component/calendar/calendar";

function App({ auth, repository }) {
  return (
    <>
      <BrowserRouter basename="/react-dietCalendar">
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
    </>
  );
}

export default App;
