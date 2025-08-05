import React, { useRef } from "react";
import "./Home.css";
import Cube from "../../components/Cube";
import { Canvas } from "@react-three/fiber";
import { Bounds } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  const homeRef = useRef();

  useGSAP(() => {
    gsap.from(homeRef.current, {
      x: -200,
      opacity: 0,
      duration: 1.0,
    });
  });

  return (
    <div className="home">
      <div className="left" ref={homeRef}>
        <div className="left-box">
          <h1>Welcome to Shift Master</h1>
          <h3>Your ultimate solution for workforce management</h3>
          <ul className="home-list">
            <li>Real-Time Insights</li>
            <li>Efficient Scheduling</li>
            <li>Comprehensive Management</li>
            <li>Simplified Financial Processes</li>
          </ul>
        </div>
      </div>
      <div className="right">
        <Canvas shadows>
          <Bounds fit margin={1.2} />
          <Cube />
        </Canvas>
      </div>
    </div>
  );
};

export default Home;
