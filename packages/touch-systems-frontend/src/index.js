import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Redirect, Route } from "react-router-dom";

import App from "./Components/Pages/AppPage/index";
import MainDashboard from "./Components/Pages/MainDashboardPage/index";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import theme from "./theme";
import { UserStoreProvider } from "./stores/index.js";

ReactDOM.render(
  <BrowserRouter>
    <UserStoreProvider>
      <ThemeProvider theme={theme}>
        <Route exact path="/" component={App} />
        <Route path="/Dashboard" component={MainDashboard} />
        <Redirect to="/Dashboard"></Redirect>
      </ThemeProvider>
    </UserStoreProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
