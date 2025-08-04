import { OrbitControls, useTexture } from "@react-three/drei";
import React from "react";

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

      <mesh castShadow>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </>
  );
};

export default Cube;
