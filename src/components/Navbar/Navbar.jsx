import React, { useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const navbarRef = useRef();
  useGSAP(() => {
    gsap.from(navbarRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.8,
    });
  });
  return (
    <div className="navbar-container" ref={navbarRef}>
      <div className="logo">
        <Link to="/">
          <img src="/shiftm.jpg" alt="logo" />
        </Link>
      </div>
      <ul className="list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Pricing</Link>
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
