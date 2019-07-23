import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constant/routes";

function Navigation() {
  return (
    <div>
      <Link to={ROUTES.HOME_PAGE}>Home</Link>
      <Link to={ROUTES.MENU_PAGE}>Menu</Link>
      <Link to={ROUTES.ABOUT_PAGE}>About</Link>
      <Link to={ROUTES.GALLERY_PAGE}>Gallery</Link>
    </div>
  );
}

export default Navigation;
