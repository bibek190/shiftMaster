import React, { useRef } from "react";
import "./About.css";
import {
  FaCalendarAlt,
  FaShieldAlt,
  FaCheckCircle,
  FaChartLine,
  FaFileAlt,
} from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const aboutTitleRef = useRef();
  const featureRef = useRef();
  // aboutRef
  useGSAP(() => {
    gsap.from(aboutTitleRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: aboutTitleRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });
  // featureRef
  useGSAP(() => {
    gsap.utils.toArray(".feature-card").forEach((card) => {
      gsap.from(card, {
        y: 100,
        duration: 0.6,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });
  });

  return (
    <div className="shiftmaster-container">
      {/* About Section */}

      <section ref={aboutTitleRef} className="about-section">
        <h1 ref={aboutTitleRef}>Why We Created ShiftMaster</h1>
        <p>
          At ShiftMaster, we know the NDIS sector inside out — because we’ve
          been there ourselves. We’ve run disability services. We’ve lived the
          compliance pressures. We’ve juggled rosters, audits, invoices, and
          stressed-out staff. We built ShiftMaster to give NDIS providers a
          better way. A smarter, easier, more human way to manage operations —
          without sacrificing quality, compliance, or your sanity. ShiftMaster
          is more than just software. It’s a tool built with the heart,
          knowledge, and experience of people who understand exactly what you
          need to succeed
        </p>
      </section>

      {/* What It Helps You Do */}
      <section className="features-section">
        <h2>What ShiftMaster Helps You Do:</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaCalendarAlt size={50} color="#3d82e9" />
            <p>📅 Create and manage rosters in minutes</p>
          </div>
          <div className="feature-card">
            <MdAccessTime size={50} color="#3d82e9" />
            <p>⏱️ Track timesheets, leave, and reimbursements easily</p>
          </div>
          <div className="feature-card">
            <FaShieldAlt size={50} color="#3d82e9" />
            <p>
              🛡️ Stay compliant with automatic reminders and audit-ready
              documents
            </p>
          </div>
          <div className="feature-card">
            <FaChartLine size={50} color="#3d82e9" />
            <p>
              📈 Visualize your business health with real-time KPI dashboards
            </p>
          </div>
          <div className="feature-card">
            <FaFileAlt size={50} color="#3d82e9" />
            <p>
              📄 Custom-build reports, forms, and workflows to suit your needs
            </p>
          </div>
        </div>
      </section>

      {/* Why Providers Love */}
      <section className="love-section">
        <h2>Why NDIS Providers Love ShiftMaster:</h2>
        <ul>
          <li>
            <FaCheckCircle color="green" /> Unified platform for operations and
            compliance
          </li>
          <li>
            <FaCheckCircle color="green" /> Fast onboarding and easy learning
            curve
          </li>
          <li>
            <FaCheckCircle color="green" /> Hosted securely in Australia — you
            own your data
          </li>
        </ul>
      </section>

      {/* Call To Action */}
      <section className="cta-section">
        <h2>Ready to simplify your operations and stay ahead?</h2>
        <NavLink to="/contact" className="cta-button">
          👉 Book a Demo Now
        </NavLink>
      </section>
    </div>
  );
};

export default About;
