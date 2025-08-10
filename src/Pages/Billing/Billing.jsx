import React from "react";
import "./Billing.css";

const Billing = () => {
  return (
    <div id="billing">
      <div className="billing-topic">
        <h1>Billing and Service Agreements</h1>
        <p>
          Simplify your billing process with automated tools, clear schedules,
          and seamless compliance management.
        </p>
      </div>
      <div className="billing-second">
        {/* 1 */}
        <div className="billing-box">
          <h2>Automated Biling Engine</h2>
          <p>
            Spend less time on billing with GoodHuman’s automated engine. It
            selects the most accurate line item from a customer’s service
            agreement to charge for a booking, reducing billing time from hours
            to minutes.
          </p>
          <ul>
            <li>Automatically matches bookings with service agreements</li>
            <li>Built-in NDIS pricing for seamless integration</li>
            <li>Reduces manual errors and speeds up billing</li>
          </ul>
        </div>
        {/* 2 */}
        <div className="billing-box">
          <h2>Create Accurate Service Schedules</h2>
          <p>
            Build detailed schedules for customer services, including support
            timings, transportation, and additional charges for non face-to-face
            claims. Save time by creating comprehensive quotes in just a few
            steps.
          </p>
          <ul>
            <li>Plan support services with precise timing and ratios</li>
            <li>Add transport details automatically for bookings</li>
            <li>Generate accurate quotes for customer services</li>
          </ul>
        </div>
        {/* 3*/}
        <div className="billing-box">
          <h2>Stay Compliant with Alerts</h2>
          <p>
            Never miss a deadline with automated alerts for expiring service
            agreements. Set customizable time-based notifications to ensure
            agreements are renewed on time, keeping your business compliant.
          </p>
        </div>
        {/* 4 */}
        <div className="billing-box">
          <h2>Digital Service Agreements</h2>
          <p>
            Streamline the signing process with GoodHuman’s service agreement
            tools. Download agreements as PDFs, email them, or print for
            signing, and mark agreements as signed with a single click.
          </p>
          <ul>
            <li>Export agreements as PDF files</li>
            <li>Easily email or print agreements for signing</li>
            <li>Keep all signed agreements organized in one place</li>
          </ul>
        </div>
        {/* 5 */}
        <div className="billing-box">
          <h2>Track Every Change with Versioning</h2>
          <p>
            Simplify audits with detailed version histories for service
            agreements. Track every edit made to agreements, ensuring complete
            transparency and accountability.
          </p>
          <ul>
            <li>Maintain a full history of service agreement changes</li>
            <li>Enable edits and updates without losing past records</li>
            <li>Ensure compliance with easy access to version logs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Billing;
