import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
// import Favicon from "react-favicon";
import Root from "./components/Root";
import store from "./store/redux";
import { Router } from "react-router-dom";
import history from "./history";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/style.css";

ReactDOM.render(
  <div>
    {/* <Favicon url="../favicon.png" /> */}
    <Provider store={store}>
      <Router history={history}>
        <Root />
      </Router>
    </Provider>
  </div>,
  document.body.appendChild(document.createElement("div"))
);
