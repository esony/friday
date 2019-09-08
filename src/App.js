import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Search from "./views/search/Search";
import css from "./App.module.css";
import Login from "./views/login/Login";
import Authorize from "./views/login/Authorize";
import Playlists from "./views/playlists/Playlists";

const App = () => (
  <div className={css.view}>
    <Router>
      <Header />
      <div className={css.route}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/playlists" component={Playlists} />
          <Route exact path="/authorize" component={Authorize} />
          <Route exact path="/queue" component={Search} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
