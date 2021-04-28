import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { routes } from "../routes";
import { NotFound } from "app/pages";
import AbsensiAlert from "./AbsensiAlert";

const options = {
  position: "top center",
  timeout: 5000,
  offset: "30px",
  transition: "scale",
};

class App extends React.Component {
  render() {
    return (
      <AlertProvider template={AlertTemplate} {...options}>
        <AbsensiAlert />
        <BrowserRouter>
          <Switch>
            {routes.map((value, i) => {
              return (
                <Route
                  key={i}
                  exact
                  path={value.path}
                  component={value.component}
                />
              );
            })}
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </AlertProvider>
    );
  }
}

export default App;
