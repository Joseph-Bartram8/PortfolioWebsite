import * as THREE from 'three';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Trail, Float, Sphere, OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// ✅ Main Component
export default function AtomicAnimation() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8] }}
      gl={{ alpha: true, antialias: true }} // ✅ Fix Background Transparency
      className="w-full h-full"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      
      {/* User can click & drag to rotate */}
      <OrbitControls enableZoom={false} rotateSpeed={0.8} />

      <Float speed={3} rotationIntensity={1.2} floatIntensity={1}>
        <Atom />
      </Float>

      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
      </EffectComposer>
    </Canvas>
  );
}

// ✅ Atom with Electrons
function Atom() {
  return (
    <group scale={1.5}> {/* Increased Scale */}
      {/* Electrons with glowing trails */}
      <Electron speed={4} rotation={[0, 0, 0]} />
      <Electron speed={4.5} rotation={[0, Math.PI / 3, 0]} />
      <Electron speed={5} rotation={[0, -Math.PI / 3, 0]} />

      {/* Center nucleus */}
      <Sphere args={[0.6, 64, 64]}>
        <meshBasicMaterial color={new THREE.Color(6, 0.5, 2)} toneMapped={false} />
      </Sphere>
    </group>
  );
}

// ✅ Electron Orbit with Glowing Trail (No Extra Lines)
function Electron({ radius = 3, speed = 4, rotation }: { radius?: number; speed?: number; rotation: [number, number, number] }) {
  const ref = useRef<THREE.Mesh | null>(null);

  useFrame((state) => {
    if (!ref.current) return;

    const t = state.clock.getElapsedTime() * speed!;
    ref.current.position.set(
      Math.sin(t) * radius!,
      (Math.cos(t) * radius! * Math.atan(t)) / Math.PI / 1.3,
      0
    );
  });

  return (
    <group rotation={new THREE.Euler(...rotation)}>
      {/* Glowing Trail */}
      <Trail width={5} length={10} color={new THREE.Color(0.2, 0.6, 2)} attenuation={(t) => t * t}>
        <mesh ref={ref}>
          <sphereGeometry args={[0.25]} />
          <meshBasicMaterial color={new THREE.Color(0.2, 0.8, 2)} toneMapped={false} />
        </mesh>
      </Trail>
    </group>
  );
}
