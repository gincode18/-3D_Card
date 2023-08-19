import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

export const Experience = () => {
  const map = useTexture("textures/1.jpg");
  return (
    <>
      <ambientLight intensity={0.6}></ambientLight>
      <Environment preset="sunset"></Environment>
      <OrbitControls />
      <mesh>
        <sphereGeometry args={[5, 60, 60]} />
        <meshStandardMaterial map={map} side={THREE.BackSide} />
      </mesh>
    </>
  );
};
