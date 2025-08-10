import React from "react";
import { Button } from "antd";
import "./Budgeting.css";
import { RiFundsFill } from "react-icons/ri";
import { IoPeople } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa6";
import { AiFillThunderbolt } from "react-icons/ai";

const Rostering = () => {
  return (
    <div className="rostering">
      <div className="top-container">
        <h1>Take Control of Your Budget</h1>
        <p>
          Ditch the hassle of outdated spreadsheets and manual processes.
          Streamline, visualize, and optimize your financial plans—all in one
          platform.
        </p>
      </div>
      <div className="bottom-container">
        <div className="box">
          <RiFundsFill size={50} color="#fec76f" />

          <h2>Smart Funding Management</h2>
          <p>
            Build comprensive funding plans tailored to your customer's needs:
          </p>
          <ul>
            <li>Set category-specific budgets</li>
            <li>Track key milestones and goals</li>
            <li>Monitor plan renewal dates effortlessly</li>
          </ul>
        </div>

        <div className="box">
          <IoPeople size={60} color=" #3d76e6" />

          <h2>Advanced Debtor Management</h2>
          <p>Simplify invoice tracking and payment processes:</p>
          <ul>
            <li>Automate invoice generation and delivery</li>
            <li>Send timely payment reminders</li>
            <li>Track overdue and pending payments</li>
          </ul>
        </div>
        <div className="box">
          <FaChartPie size={50} color="#09b03e" />

          <h2>Real-Time Analytics</h2>
          <p>
            Visualize your spending with detailed charts and insights. Make
            data-driven decisions with up-to-date metrics and performance
            summaries.
          </p>
        </div>
        <div className="box">
          <AiFillThunderbolt size={50} color="#13d6c9" />

          <h2>Automated Budget Alerts</h2>
          <p>
            Stay ahead with automatic notifications. Get alerts for
            overspending, underspending, or upcoming renewals to keep budgets on
            track.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rostering;
