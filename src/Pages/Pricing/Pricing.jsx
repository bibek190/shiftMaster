import React from "react";
import "./Pricing.css";
import { LuHandshake } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { BsBuildings } from "react-icons/bs";

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
        {/* silver plan */}
        <div className="price-card ">
          <div className="card-topic silver">
            <LuHandshake size={40} opacity={0.5} />
            <h3>Silver Plan(Essentials)</h3>

            <p>
              <strong>Best For:</strong>
              <br />
              Small providers (1–20 staff) starting out or stabilizing their
              operations
            </p>
            <br />
            <p style={{ fontSize: "1rem" }}>
              For small providers who want to manage staff, shifts, and
              compliance without the overwhelm.
            </p>
          </div>

          <ul className="tick-list">
            <li>Staff Management (basic HR info, certifications tracking)</li>
            <li>
              Scheduling & Timesheets (simple roster builder, mobile
              clock-in/out)
            </li>
            <li> Leave Management (apply, approve, track leave balances)</li>
            <li> Incident Management (standard forms and logs)</li>
            <li>Document Storage (client and staff documents)</li>
            <li>
              Xero Payroll Integration (approved timesheets and reimbursements
              push to Xero)
            </li>
            <li>
              Basic Invoicing (manual invoicing linked to service records)
            </li>
            <li>
              Basic Compliance Reminders (for expiring certifications, service
              agreements)
            </li>
          </ul>
          <Button className="gradient-button">7 Days Free Trial</Button>
        </div>
        {/* Gold Plan */}
        <div className="price-card">
          <div className="card-topic gold">
            <GoPeople size={40} opacity={0.5} />
            <h3>Gold Plan(Growth)</h3>
            <p>
              <strong>Best For:</strong>
              <br />
              Providers scaling their services (20–100 staff) who want more
              control, less chaos
            </p>
            <br />
            <p>
              For providers ready to streamline, grow, and protect their
              business with better insights.
            </p>
          </div>

          <ul className="tick-list">
            <li> Advanced Scheduling (skill/staff preference matching)</li>
            <li>
              {" "}
              Shift Conflict Detection (warns about double-booking,
              qualifications expiring)
            </li>
            <li>
              {" "}
              Reimbursement Management (travel claims, other staff
              reimbursements)
            </li>
            <li>
              {" "}
              Enhanced Incident Management (customizable forms + incident
              categories)
            </li>
            <li>
              KPI Management Dashboard (track shifts filled, incidents, revenue
              targets)
            </li>
            <li>
              Custom Forms (build your own forms for intakes, onboarding, risk
              assessments, etc.)
            </li>
            <li>
              Basic Analytics (simple trend graphs for incidents, revenue,
              shifts)
            </li>
          </ul>
          <Button className="gradient-button">7 Days Free Trial</Button>
        </div>
        {/* Platinum Plan (Elite) */}
        <div className="price-card">
          <div className="card-topic platinum">
            <BsBuildings size={40} opacity={0.5} />
            <h3 style={{ color: "white" }}>Platinum Plan(Elite)</h3>

            <p>
              <strong>Best For:</strong>
              <br />
              Larger or fast-growing providers (100+ staff, multi-site,
              SIL/Complex needs providers) who want to be audit-ready,
              risk-proof, and highly efficient.
            </p>
            <br />
            <p>
              For mature providers who demand full visibility, compliance
              confidence, and operational excellence.
            </p>
          </div>
          <ul className="tick-list">
            <li>
              {" "}
              Full Customisable Reporting (build any report you need: staff,
              client, financial, compliance)
            </li>
            <li>
              {" "}
              Deep Analytics (business health metrics, service profitability,
              workforce efficiency)
            </li>
            <li>
              {" "}
              Compliance Management Suite (incident audits, document audits, HR
              compliance tracking)
            </li>
            <li>
              Auto Task Assignment (automatically assign compliance tasks when
              incidents happen)
            </li>
            <li>
              Internal Newsfeed (send updates, memos, celebrations to the whole
              team)
            </li>
            <li>
              Role-Based Access Control (fine-tune who can see/do what in the
              system)
            </li>
            <li>
              Audit-Ready Evidence Packs (1-click download of compliance
              documentation for NDIS audits)
            </li>
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
