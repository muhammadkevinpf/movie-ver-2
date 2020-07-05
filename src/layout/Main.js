import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import Discover from "../layout/Discover";
import { SidebarProvider } from "../SidebarContext";
function Main() {
  return (
    <SidebarProvider>
      <div className="d-flex" id="wrapper">
        <Router>
          <Sidebar />
          <div id="page-content-wrapper">
            <Navbar />
            <div className="content-wrapper">
              <Switch>
                <Route exact path="/">
                  <Discover />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </SidebarProvider>
  );
}

export default Main;
