import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import routes from "./index";

function ReactRouter(props) {
  if (process.env.NODE_ENV === "production") {
    return (
      <HashRouter basename="/">
        <Switch>
          {routes.map((route) => (
            <Route
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              )}
            />
          ))}
          <Redirect to={"/"} />
        </Switch>
      </HashRouter>
    );
  } else {
    return (
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              )}
            />
          ))}
          <Redirect to={"/"} />
        </Switch>
      </Router>
    );
  }
}

export default ReactRouter;
