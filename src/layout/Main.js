import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import Discover from "../layout/Discover";
import LayoutMovie from "../layout/MainLayout";
import LayoutTV from "../layout/MainLayout";
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
                <Route path="/movies/playing">
                  <LayoutMovie type="movie" status="now_playing" />
                </Route>
                <Route path="/movies/popular">
                  <LayoutMovie type="movie" status="popular" />
                </Route>
                <Route path="/movies/top-rated">
                  <LayoutMovie type="movie" status="top_rated" />
                </Route>
                <Route path="/tv/on-the-air">
                  <LayoutMovie type="tv" status="on_the_air" />
                </Route>
                <Route path="/tv/popular">
                  <LayoutMovie type="tv" status="popular" />
                </Route>
                <Route path="/tv/top-rated">
                  <LayoutMovie type="tv" status="top_rated" />
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
