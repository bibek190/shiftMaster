import React, { useRef, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const listRef = useRef();
  const [showNavbar, setShowNavbar] = useState(false);

  const handleNav = () => setShowNavbar((prev) => !prev);
  const closeNavbar = () => setShowNavbar(false);

  useGSAP(() => {
    if (showNavbar) {
      gsap.from(listRef.current, {
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });
    }
  }, [showNavbar]);

  return (
    <div className="navbar-container">
      <div className="logo">
        <Link to="/" onClick={closeNavbar}>
          <img src="/shiftm.jpg" alt="logo" />
        </Link>
      </div>

      {/* Hamburger  */}
      <div
        className={`hamburger ${showNavbar ? "open" : ""}`}
        onClick={handleNav}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === "Enter" && handleNav()}
        aria-label="Toggle navigation menu"
      >
        <i
          className={showNavbar ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          style={{ color: "#333", fontSize: "1.5rem" }}
        ></i>
      </div>

      <ul ref={listRef} className={`list ${showNavbar ? "show" : ""}`}>
        <li>
          <Link to="/" onClick={closeNavbar}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/pricing" onClick={closeNavbar}>
            Pricing
          </Link>
        </li>
        <li>
          <Link to="/Feature" onClick={closeNavbar}>
            Feature
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeNavbar}>
            About
          </Link>
        </li>
      </ul>

      <Link to="/contact" className="button-book" onClick={closeNavbar}>
        Book Us
      </Link>
    </div>
  );
};

export default Navbar;
