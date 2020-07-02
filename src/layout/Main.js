import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
function Main() {
  return (
    <div className="d-flex" id="wrapper">
      <Router>
        <Sidebar />
        <div id="page-content-wrapper">
          <Navbar />
          <div className="content-wrapper">
            <Switch>
              <Route exact path="/">
                <p>halo gan</p>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default Main;
