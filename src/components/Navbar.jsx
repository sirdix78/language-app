import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div className="nav-container">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/about">
        About
      </Link>
      <img src={logo} alt="logo" className="nav-logo" />
      <Link className="nav-link" to="/student">
        Student
      </Link>
      <Link className="nav-link" to="/teacher">
        Teacher
      </Link>
    </div>
  );
};

export default Navbar;
