import React from "react";
import "./CustomerManagement.css";
import { Button } from "antd";

const Rostering = () => {
  return (
    <div className="rostering">
      <div className="top-container">
        <h1>Customer Care Information</h1>
        <p>
          Know who your customers are and provide tailored, quality support
          effortlessly.
        </p>
      </div>
      <div className="bottom-container">
        <div className="box">
          <h2>Care Information</h2>
          <p>
            Don’t go searching for important information. Both admin and
            frontline teams can view all important customer care information and
            alert levels, including:
          </p>
          <ul>
            <li>Support needs</li>
            <li>Permanent conditions</li>
            <li>Medications</li>
            <li>Behaviours</li>
            <li>General Information</li>
            <li>Historical notes</li>
          </ul>
          <Button type="primary" ghost>
            Explore More
          </Button>
        </div>

        <div className="box">
          <h2>Skills Matching</h2>
          <p>
            Match your customers to the right team members to deliver quality,
            tailored support.
          </p>
          <ul>
            <li>Experience with a customer's permanent conditions</li>
            <li>Relevant skills to meet a customer's support needs</li>
            <li>The customer's own team member preferences</li>
            <li>Speaks the same language</li>
            <li>Shares the same religion</li>
          </ul>
          <Button type="primary" ghost>
            Explore Rostering
          </Button>
        </div>
        <div className="box">
          <h2>Customer Intake</h2>
          <p>
            Gather client information in the same place you store it.
            <br /> Help your customers tell their story — not retell it. Intake
            forms automatically generate GoodHuman customer profiles,
            eliminating double-handling of data and wasted admin time.
          </p>
          <ul>
            <li>Automatic syncing</li>
            <li>Version control</li>
            <li>Data Verification</li>
            <li>Industry-standard templates</li>
          </ul>
          <Button type="primary" ghost>
            Customer Intake Forms
          </Button>
        </div>
        <div className="box">
          <h2>Pinned Alerts</h2>
          <p>
            Keep critical information front and centre. Pin any ‘need-to-know’
            information to the customer record and ensure it’s easily
            discoverable for frontline and admin teams.
          </p>
          <Button type="primary" ghost>
            Explore Alerts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Rostering;
