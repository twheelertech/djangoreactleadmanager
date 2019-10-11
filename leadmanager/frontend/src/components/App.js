import React, { Fragment } from "react";
import ReactDom from "react-dom";

import Header from "./layout/Header";
import Alerts from "./layout/Alerts";
import Dashboard from "./leads/Dashboard";

import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import { Provider } from "react-redux";
import store from "../store";

const App = () => {
  // alertOptions
  const alertOptions = {
    position: positions.TOP_CENTER,
    timeout: 3000,
    offset: "30px"
  };
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Fragment>
          <Header />
          <Alerts />
          <div className="container">
            <Dashboard />
          </div>
        </Fragment>
      </AlertProvider>
    </Provider>
  );
};

ReactDom.render(<App />, document.getElementById("app"));
