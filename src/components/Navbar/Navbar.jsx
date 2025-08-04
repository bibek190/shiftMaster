import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <Link to="/">
          <img src="/shiftm.jpg" alt="logo" />
        </Link>
      </div>
      <ul className="list">
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/billing">Billing & Service Agrement</Link>
        </li>
        <li>
          <Link to="/costumermanagement">Customer Management</Link>
        </li>
        <li>
          <Link to="/budgeting">Budgeting</Link>
        </li>
        <li>
          <Link to="/rostering">Rostering</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
