import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./component/login/login";
import Home from "./component/home/home";

function App({ authFirebase }) {
  return (
    <BrowserRouter>
      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <Login authFirebase={authFirebase} />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
