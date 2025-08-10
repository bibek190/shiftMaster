import { Button } from "antd";
import React from "react";
import "./About.css";
import { TbWorld } from "react-icons/tb";
import { MdOutlineVisibility } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { FcIdea } from "react-icons/fc";
import { FaRegStar } from "react-icons/fa";

const About = () => {
  return (
    <div id="about">
      <div className="about-topic">
        <h1>A Vision For Universal Support </h1>
        <p>
          Every individual, no matter their background, seeks support and
          connection at some point in their lives. While the world is full of
          compassionate individuals, finding the right support can still be
          challenging. We are here to change that.{" "}
        </p>
        <small>
          We celebrate the incredible achievements of support services and make
          it easier for everyone, everywhere to access the help they need.
        </small>
        <Button type="primary" ghost>
          Read More About Our Vision
        </Button>
      </div>
      <div className="about-second">
        {/* mission */}
        <div className="about-mission">
          <TbWorld size={60} color=" rgb(61, 130, 233)" />
          <h2>Our Mission</h2>
          <p>
            To empower individuals by creating a platform that connects people
            to access, provide, and celebrate meaningful support.
          </p>
        </div>
        {/* vision */}
        <div className="about-mission">
          <MdOutlineVisibility size={60} color=" rgb(61, 130, 233)" />
          <h2>Our Vision</h2>
          <p>Making universal support a cornerstone of the human experience.</p>
        </div>
      </div>

      {/* Our Value section */}
      <div className="about-value">
        <h2>Our Values</h2>
        <div className="value">
          <div className="value-box">
            <FaRegHeart size={60} color="purple" />
            <h2>Lead with Empathy</h2>
            <p>
              Driven by empathy, we strive to understand and consider the
              experiences of others. We create lasting impact by addressing real
              needs with compassion and purpose.
            </p>
          </div>
          <div className="value-box">
            <IoPeople size={60} color="lightblue" />
            <h2>Be a Selfless Collaborator</h2>
            <p>
              Together, we achieve more. By sharing ideas openly, embracing
              diverse perspectives, and celebrating collective achievements, we
              influence meaningful change.
            </p>
          </div>
          <div className="value-box">
            <FcIdea size={60} />
            <h2>Act with Courageous Curiosity</h2>
            <p>
              We challenge the status quo through bold actions and creative
              ideas. We ask questions, embrace innovation, and strive for
              transformative change.
            </p>
          </div>
          <div className="value-box">
            <FaRegStar size={60} color=" rgb(61, 130, 233)" />
            <h2>Pursue Relentless Perfectionism</h2>
            <p>
              We aim for excellence in an industry where "adequate" has been the
              norm. We pursue ambitious goals with determination, delivering
              exceptional experiences every time.
            </p>
          </div>
        </div>
      </div>
      <div className="journey">
        <h1>Learn More About Our Journey</h1>
        <p>
          Discover how we’re transforming support services with innovative
          technology and a commitment to amplifying the good in the world.
        </p>
        <Button type="primary" ghost>
          Read Our Blogs
        </Button>
      </div>
    </div>
  );
};

export default About;
