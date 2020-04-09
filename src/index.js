import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/main/App";
import * as serviceWorker from "./serviceWorker";
import "./assets/css/fonts/hurme-geometric-sans-3/font-hurme.css";
import "./assets/css/form.css";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
if (process.env.NODE_ENV === "development") {
  serviceWorker.unregister();
} else {
  serviceWorker.register();
}
