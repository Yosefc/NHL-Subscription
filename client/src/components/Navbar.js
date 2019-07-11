import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [currentURLNavItem, setURLNavItem] = useState(window.location.pathname);
  return (
    <header className="App-header">
      <nav className="nav-bar">
        <Link
          to="/"
          className={`nav-item ${currentURLNavItem === "/" ? "selected-link" : ""}`}
          onClick={_ => {
            setURLNavItem("/");
          }}
        >
          Home
        </Link>
        <Link
          to="/unsubscribe"
          className={`nav-item ${currentURLNavItem === "/unsubscribe" ? "selected-link" : ""}`}
          onClick={_ => {
            setURLNavItem("/unsubscribe");
          }}
        >
          Unsubscribe
        </Link>
        <Link
          to="/stats"
          className={`nav-item ${currentURLNavItem === "/stats" ? "selected-link" : ""}`}
          onClick={_ => {
            setURLNavItem("/stats");
          }}
        >
          Stats
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
