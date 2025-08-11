import React, { useEffect, useRef } from "react";
import "./Home.css";
import { Canvas, useThree } from "@react-three/fiber";
import { Bounds, OrbitControls } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Cube from "../../3d/Cube";
import { NavLink } from "react-router-dom";

const Home = () => {
  const homeRef = useRef();

  useGSAP(() => {
    gsap.from(homeRef.current, {
      x: -200,
      opacity: 0,
      duration: 1.0,
    });
  });

  // resize canvas
  function ResizeFix() {
    const { gl } = useThree();
    useEffect(() => {
      gl.setSize(window.innerWidth, window.innerHeight);
    }, [gl]);
    return null;
  }

  return (
    <div className="home">
      <div className="left" ref={homeRef}>
        <div className="left-box">
          <h1>ShiftMaster — The Smarter CRM for NDIS Providers</h1>
          <h3>
            Run your NDIS service with less stress and more control. Manage
            staff, shifts, incidents, invoicing, compliance, and KPIs — all in
            one easy-to-use platform
          </h3>
          <div className="home-links">
            <NavLink to="/contact" className="demo">
              <span>👉</span> Book a Free Demo
            </NavLink>
            <NavLink to="/about" className="see-work">
              <span></span> See How it Works
            </NavLink>
          </div>
        </div>
      </div>
      <div className="right">
        <div style={{ width: "100%", height: "100%" }}>
          <Canvas camera={{ position: [0, 0, 5] }}>
            <Bounds fit margin={1.2} />
            <Cube />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Home;
