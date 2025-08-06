import React from "react";
import "./Pricing.css";

import { Button } from "antd";

const Pricing = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-title">
        <h1>Pricing Plan</h1>
        <p className="pricing-subtitle">
          Ensure long-term success with our flexible pricing plans that fit your
          needs. Experience the difference with
          <strong> ShiftMaster</strong>. Start your free 7-day trial now and see
          the value for yourself.
        </p>

        <small className="muted">
          (Note: All prices mentioned are exclusive of GST.)
        </small>
      </div>
      <div className="price-container">
        <div className="price-card">
          <h2>Total Suite Card</h2>
          <p>Perfect value for money</p>
          <h1>....</h1>
          <ul className="tick-list">
            <li>Free Accounts for Support Workers</li>
            <li>Provider’s Dashboard</li>
            <li>Effortless Invoicing</li>
            <li> Support Coordination</li>
            <li>Limited Training</li>
            <li>Customer Support via Email</li>
          </ul>
          <Button className="gradient-button">7 Days Free Trial</Button>
        </div>
        <div className="price-card">
          <h2>Total Suite Card</h2>
          <p>Perfect value for money</p>
          <h1>....</h1>
          <ul className="tick-list">
            <li>All Features of Total Suite</li>
            <li>Advice by NDIS Expert Lawyers</li>
            <li>Standard Website for Your Business</li>
            <li> Employment Contracts (Value $800)</li>
            <li>Anti-Poaching Policy (Value $500)</li>
            <li>Internal Audit Report (Value $1,200)</li>
          </ul>
          <Button className="gradient-button">7 Days Free Trial</Button>
        </div>
      </div>
      {/* message */}
      <div className="pricing-message">
        <h4 className="fw-bold">Don't miss out!</h4>
        <p>
          <strong>Platinum Benefits:</strong> Free Legal Advice, Website
          Development, Accounting Advice, and NDIS Health Check.
        </p>
        <small className="text-muted">
          <em>
            Pricing is indicative and subject to change. Prices exclude GST.
          </em>
        </small>
      </div>
    </div>
  );
};

export default Pricing;
