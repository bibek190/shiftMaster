import React from "react";
import "./Rostering.css";

const Rostering = () => {
  return (
    <div className="rostering">
      <div className="top-container">
        <h1>Rostering and Availability</h1>
        <p>
          Efficiently match your team members with customers while streamlining
          your scheduling process to improve outcomes for everyone.
        </p>
      </div>
      <div className="bottom-container">
        <div className="box">
          <h2>Skill Matching</h2>
          <p>
            Assign the best team member to every customer based on
            qualifications, preferences, and history. Deliver highly
            personalized support using insights from GoodHuman's advanced
            rostering engine.
          </p>
          <ul>
            <li>
              Match team members to customers based on qualifications and
              preferences
            </li>
            <li>Consider experience, language, interests, and availability</li>
            <li>
              Equip your staff with detailed care information, shift notes, and
              instructions ahead of time
            </li>
          </ul>
        </div>
        <div className="box">
          <h2>Take Notes on the Go</h2>
          <p>
            Prompt your team to record shift notes, incidents, and tag goals
            while they are fresh in their minds. This ensures important details
            are captured and invoicing processes remain efficient.
          </p>
        </div>
        <div className="box">
          <h2>Streamlined Scheduling for Complex Needs</h2>
          <p>
            Optimize scheduling for complex or group sessions by deliberately
            matching team members with customers. Create better outcomes for
            everyone involved by ensuring the right skills and preferences align
            for each session.
          </p>
        </div>
        <div className="box">
          <h2>Availability and Scheduling</h2>
          <p>
            Take the guesswork out of assigning shifts by syncing team
            availability, scheduled leave, and other preferences with
            GoodHuman’s rostering engine.
          </p>
          <ul>
            <li>
              Team members can apply for leave and request shifts directly from
              their app
            </li>
            <li>
              Accurately track shift start and finish times to tidy up
              timesheets
            </li>
            <li>
              Access up-to-date availability and leave requests to manage
              workforce capacity effectively
            </li>
          </ul>
        </div>
        <div className="box">
          <h2>Fill Gaps Easily</h2>
          <p>
            Quickly address staffing gaps by publishing open shifts to an
            eligible pool of workers based on their availability, location, and
            expertise. This ensures that your workforce is always operating at
            full capacity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rostering;
