import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import HomePage from "../HomePage/HomePage";
import AboutPage from "../AboutPage/AboutPage";
import MenuPage from "../MenuPage/MenuPage";
import GalleryPage from "../GalleryPage/GalleryPage";

import * as ROUTES from "../../constant/routes";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navigation />
          </div>
          <br />

          <Route
            exact
            path={ROUTES.HOME_PAGE}
            render={({ history }) => <HomePage />}
          />
          <Route
            exact
            path={ROUTES.MENU_PAGE}
            render={({ history }) => <MenuPage />}
          />
          <Route
            exact
            path={ROUTES.ABOUT_PAGE}
            render={({ history }) => <AboutPage />}
          />
          <Route
            exact
            path={ROUTES.GALLERY_PAGE}
            render={({ history }) => <GalleryPage />}
          />
          <div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}
