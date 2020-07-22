import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import routes from "./index";

function ReactRouter(props) {
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

export default ReactRouter;
