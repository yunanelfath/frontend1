import React from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

import { routerPath } from "./Routerlist";

import Homepage from 'views/Homepage'


var browserHistory = createBrowserHistory();
const RouterPath = () => {

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route
          path={routerPath.homepage.root}
          component={Homepage}
          exact
        />
      </Switch>
    </Router>
  )
}

export default RouterPath
