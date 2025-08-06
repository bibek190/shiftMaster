import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <p>© 2025 Template. Design by ShiftMaster</p>
        <p>
          <Link>Terms & Conditions</Link>
        </p>
        <div className="footer-content">
          <div className="footer-title">
            <h3>Product</h3>
            <ul className="footer-links">
              <li>
                <Link>Operations</Link>
              </li>
              <li>
                <Link>Employee Time Clock</Link>
              </li>
              <li>
                <Link>Employee Scheduling </Link>
              </li>
            </ul>
          </div>
          <div className="footer-title">
            <h3>Company</h3>
            <ul className="footer-links">
              <li>
                <Link>Customers</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-title">
            <h3>Industries</h3>
            <ul className="footer-links">
              <li>
                <Link>Retail</Link>
              </li>
              <li>
                <Link>Security</Link>
              </li>
              <li>
                <Link>Cleaning</Link>
              </li>
            </ul>
          </div>
          <div className="footer-title">
            <h3>Resources</h3>
            <ul className="footer-links">
              <li>
                <Link>Blog</Link>
              </li>

              <li>
                <Link>Case Studies</Link>
              </li>

              <li>
                <Link>Help Center</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-icons">
          <FaFacebook style={{ margin: "0 30px" }} size={24} />
          <FaYoutube style={{ margin: "0  30px" }} size={24} />
          <FaLinkedin style={{ margin: "0 30px" }} size={24} />
          <FaInstagram style={{ margin: "0 30px" }} size={24} />
          <FaTiktok style={{ margin: "0 30px" }} size={24} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
