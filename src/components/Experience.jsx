import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { Alien } from "./Alien";

export const Experience = () => {
  const map = useTexture("textures/1.jpg");
  return (
    <>
      <ambientLight intensity={1}></ambientLight>
      {/* <Environment preset="sunset"></Environment> */}
      <OrbitControls />
      <Alien scale={0.5} position-y={-1}> </Alien>
      <mesh>
        <sphereGeometry args={[5, 60, 60]} />
        <meshPhysicalMaterial map={map} side={THREE.BackSide} />
      </mesh>
    </>
  );
};
