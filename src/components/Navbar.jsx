import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <Link className="nav-link" to="/">
        <h3>
          AlSp<span>Lingo</span>
        </h3>
      </Link>
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/about">
        About
      </Link>
      <Link className="nav-link" to="/modules/student">
        Student
      </Link>
      <Link className="nav-link" to="/modules/teacher">
        Teacher
      </Link>
    </div>
  );
};

export default Navbar;
