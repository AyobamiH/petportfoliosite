import React from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import { useLoader, useFrame } from "@react-three/fiber";

const AnimeFrame = ({ position, rotation, url }) => {
  // Load the frame GLTF
  const { nodes, materials } = useGLTF("/models/anime-frame.glb");

  // Load the image texture
  const texture = useLoader(TextureLoader, url);

  // Animate the frame's rotation and position
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    nodes.Frame.rotation.z = Math.sin(t / 1.5) / 20;
    nodes.Frame.position.y = Math.sin(t / 1.5) / 10;
  });

  return (
    <group position={position} rotation={rotation}>
      <mesh geometry={nodes.Frame.geometry} material={materials.FrameMaterial}>
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    </group>
  );
};


export default AnimeFrame;