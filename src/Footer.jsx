import React from "react";
import { NavLink } from "react-router-dom";
import './App.css';

function Header() {
  return (
    <nav>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/messages">
        Messages
      </NavLink>
    </nav>
  );
}
export default Header;