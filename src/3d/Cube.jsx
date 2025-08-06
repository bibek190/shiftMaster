import { OrbitControls, useTexture } from "@react-three/drei";
import React from "react";
import { BoxGeometry } from "three";

const Cube = () => {
  const texture = useTexture("/shiftm.jpg");
  return (
    <>
      <OrbitControls autoRotate />
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[0, 1, 1]}
        castShadow
        intensity={1}
        color={"yellow"}
      />

      <mesh scale={3.2} castShadow>
        <boxGeometry />
        <meshStandardMaterial map={texture} />
      </mesh>
    </>
  );
};

export default Cube;
