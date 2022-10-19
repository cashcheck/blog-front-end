import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <div className="nav_bar">
      <Link to="/protected">protected</Link>
      <Link to="/register">register</Link>
      <Link to="/login">login</Link>
    </div>
  );
}

export default Nav;
