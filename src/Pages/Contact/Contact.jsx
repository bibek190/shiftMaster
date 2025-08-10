import React, { useRef } from "react";
import "./Contact.css";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactPage = () => {
  const contactRef = useRef();
  useGSAP(() => {
    gsap.from(contactRef.current, {
      x: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });
  return (
    <div className="contact-container" ref={contactRef}>
      <div className="contact-info">
        <h2>Contact Us</h2>
        <ul>
          <li>📍 23, Avenue de Paris 75012 Paris</li>
          <li>📧 hello@michelmartin.com</li>
          <li>📷 mike.chmardin</li>
          <li>📞 +33619530144</li>
        </ul>
        <div className="social-icons">
          <ul className="contact-logos">
            <li>
              <FaFacebook size={24} />
            </li>
            <li>
              <FaYoutube size={24} />
            </li>
            <li>
              <FaLinkedin size={24} />
            </li>
            <li>
              <FaInstagram size={24} />
            </li>
            <li>
              <FaTiktok size={24} />
            </li>
          </ul>
        </div>
      </div>

      <div className="contact-form">
        <h2>Get in Touch</h2>
        <p>
          <IoMdArrowDropright /> Have questions?
          <br />
          <IoMdArrowDropright /> Want to see ShiftMaster in action?
          <br />
          <IoMdArrowDropright /> We’d love to show you how we can help.
        </p>
        <form>
          <input type="text" placeholder="Your name" required />
          <input type="text" placeholder="Organisation Name" required />
          <input type="email" placeholder="Your email" required />
          <input type="number" placeholder="Phone" />
          <textarea placeholder="How can we help?"></textarea>
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
