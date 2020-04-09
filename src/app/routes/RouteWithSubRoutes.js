import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
const RemoveWarning = route => <Router></Router>;
const RouteWithSubRoutes = route => (
  <Route
    state={route.pageTitle}
    path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />
);
export { RouteWithSubRoutes, RemoveWarning };
