import React from "react";
import {
  FaUsers,
  FaCalendarCheck,
  FaUmbrellaBeach,
  FaExclamationTriangle,
  FaFileInvoiceDollar,
  FaCar,
  FaWpforms,
  FaChartBar,
  FaShieldAlt,
  FaBullhorn,
} from "react-icons/fa";
import "./Feature.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FeaturesPage = () => {
  useGSAP(() => {
    gsap.utils.toArray(".feature-box").forEach((card) => {
      gsap.from(card, {
        y: 100,
        duration: 1.0,
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
  const features = [
    {
      icon: <FaUsers size={50} color="#3d82e9" />,
      title: "Staff Management",
      desc: "Track certifications, HR documents, leave, and compliance all in one simple dashboard.",
    },
    {
      icon: <FaCalendarCheck size={50} color="#3d82e9" />,
      title: "Scheduling & Timesheets",
      desc: "Drag-and-drop rostering, mobile clock-ins, shift conflict warnings — built for busy providers.",
    },
    {
      icon: <FaUmbrellaBeach size={50} color="#3d82e9" />,
      title: "Leave Management",
      desc: "Staff leave requests and approvals made simple, with full integration into rostering.",
    },
    {
      icon: <FaExclamationTriangle size={50} color="#3d82e9" />,
      title: "Incident Management",
      desc: "Log, track, and respond to incidents quickly and correctly — stay audit-ready with ease.",
    },
    {
      icon: <FaFileInvoiceDollar size={50} color="#3d82e9" />,
      title: "Invoicing & Payroll Integration (Xero)",
      desc: "Generate invoices linked to service records and push approved timesheets directly to Xero.",
    },
    {
      icon: <FaCar size={50} color="#3d82e9" />,
      title: "Reimbursements",
      desc: "Easy management of travel claims and other staff reimbursements.",
    },
    {
      icon: <FaWpforms size={50} color="#3d82e9" />,
      title: "Custom Forms & Reporting",
      desc: "Create and manage your own forms for intakes, onboarding, risk assessments — and build reports your way.",
    },
    {
      icon: <FaChartBar size={50} color="#3d82e9" />,
      title: "KPI Management & Analytics",
      desc: "Track revenue, staffing efficiency, incident trends, and more — all in real time.",
    },
    {
      icon: <FaShieldAlt size={50} color="#3d82e9" />,
      title: "Compliance Management",
      desc: "Automatic reminders for incident reports, certifications, service agreements, and more — so you never miss a compliance deadline.",
    },
    {
      icon: <FaBullhorn size={50} color="#3d82e9" />,
      title: "Internal Newsfeed",
      desc: "Keep your team informed with announcements, updates, and celebrations — right inside ShiftMaster.",
    },
  ];

  return (
    <div className="features-container">
      <h1>Everything You Need to Run Your NDIS Service — In One Place</h1>
      <div className="features-flex">
        {features.map((feature, index) => (
          <div className="feature-box" key={index}>
            {feature.icon}
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesPage;
