import React, { useRef, useState } from "react";
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
import { NavLink } from "react-router-dom";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  // form
  const [form, setForm] = useState({
    name: "",
    organisationName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // env files
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    // env files
    try {
      emailjs.send(serviceID, templateID, form, publicKey).then(
        (result) => {
          alert("Message sent successfully!");
          setForm({
            name: "",
            organisationName: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.error(error.text);
        }
      );
    } catch (e) {
      console.log("error", e.message);
    }
  };
  // form

  const contactRef = useRef();
  useGSAP(() => {
    gsap.from(contactRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.5,
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
          <li>📍 2/169 newcastle St fyshwick</li>
          <li>📧 admin@visionsoftwares.com.au </li>
          <li>📞 +61251356649</li>
        </ul>
        <div className="social-icons">
          <ul className="contact-logos">
            <li>
              <NavLink
                to={
                  "https://www.linkedin.com/company/vision-software-pty-ltd/posts/?feedView=all"
                }
              >
                <FaLinkedin size={24} />
              </NavLink>
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="organisationName"
            placeholder="Organisation Name"
            value={form.organisationName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="phone"
            name="phone"
            value={form.phone}
            placeholder="Phone"
            onChange={handleChange}
          />
          <textarea
            placeholder="How can we help?"
            name="message"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
