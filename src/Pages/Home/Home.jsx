import React from "react";
import "./Home.css";
import Cube from "../../components/Cube";
import { Canvas } from "@react-three/fiber";

const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <h1>Welcome to Shift Master</h1>
        <h3>Your ultimate solution for workforce management</h3>
        <ul className="home-list">
          <li>Real-Time Insights</li>
          <li>Efficient Scheduling</li>
          <li>Comprehensive Management</li>
          <li>Simplified Financial Processes</li>
        </ul>
      </div>
      <div className="right">
        <Canvas shadows>
          <Cube />
        </Canvas>
      </div>
    </div>
  );
};

export default Home;
