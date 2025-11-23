"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function ShoeModel() {
  const { scene } = useGLTF("/Nike.glb");

  scene.position.set(0, -0.5, 0);

  return <primitive object={scene} scale={11} />;
}

// function ShoeModel() {
//   const { scene } = useGLTF("/Nike.glb");

//   useFrame(({ clock }) => {
//     const t = clock.getElapsedTime();
//     scene.rotation.y = t * 0.2; // Regular rotation
//     scene.rotation.x = Math.sin(t * 0.8) * 0.15; // Rocking motion
//   });

//   return <primitive object={scene} scale={11} position={[0, -0.5, 0]} />;
// }

export default function SpinningShoe() {
  return (
    <div className="w-full h-[600px]">
      <Canvas camera={{ position: [0, 0.8, 4], fov: 45, near: 0.1, far: 200 }}>
        <ambientLight intensity={1.2} />
        <directionalLight intensity={2} position={[3, 3, 3]} />
        <ShoeModel />

        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enableZoom={false}
          minDistance={3}
          maxDistance={6}
        />
      </Canvas>
    </div>
  );
}
