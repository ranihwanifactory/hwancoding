
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Environment, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';

const ThreeRobot: React.FC = () => {
  const group = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const neckRef = useRef<THREE.Mesh>(null);
  const bodyRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!headRef.current || !bodyRef.current) return;
    
    // Normalized mouse coordinates (-1 to 1)
    const mouseX = state.mouse.x;
    const mouseY = state.mouse.y;

    // Head follows mouse with smooth interpolation
    // Limit rotation to natural range
    const targetHeadRotationY = mouseX * 0.6;
    const targetHeadRotationX = -mouseY * 0.4;
    
    headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetHeadRotationY, 0.05);
    headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, targetHeadRotationX, 0.05);

    // Body subtle reaction (lean and turn)
    bodyRef.current.rotation.y = THREE.MathUtils.lerp(bodyRef.current.rotation.y, mouseX * 0.15, 0.03);
    bodyRef.current.rotation.z = THREE.MathUtils.lerp(bodyRef.current.rotation.z, -mouseX * 0.05, 0.03);
    
    // Subtle float/breath effect added to the whole group
    if (group.current) {
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={group} position={[0, -1, 0]}>
      <PerspectiveCamera makeDefault position={[0, 1, 6]} fov={35} />
      
      {/* Lighting for metallic feel */}
      <spotLight position={[10, 10, 10]} intensity={1.5} penumbra={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4477ff" />
      <directionalLight position={[0, 5, 5]} intensity={1} />

      <group ref={bodyRef}>
        {/* Head Unit */}
        <group ref={headRef} position={[0, 2.4, 0]}>
          {/* Main Visor Face */}
          <mesh position={[0, 0, 0.15]}>
            <sphereGeometry args={[0.4, 64, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshStandardMaterial color="#0a0a0a" roughness={0.05} metalness={1} />
          </mesh>
          
          {/* Back of Head - Chrome/White Shell */}
          <mesh position={[0, 0, -0.05]}>
            <sphereGeometry args={[0.39, 64, 64]} />
            <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.8} />
          </mesh>

          {/* Eye Emissive Strip (Futuristic AI look) */}
          <mesh position={[0, 0.05, 0.45]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.25, 0.25, 0.02, 32]} />
            <meshBasicMaterial color="#0066ff" transparent opacity={0.6} />
          </mesh>
        </group>

        {/* Neck Mechanism */}
        <mesh ref={neckRef} position={[0, 1.95, 0]}>
          <cylinderGeometry args={[0.1, 0.12, 0.4, 32]} />
          <meshStandardMaterial color="#333333" roughness={0.5} metalness={0.9} />
        </mesh>

        {/* Torso / Chest Plate */}
        <group position={[0, 0.8, 0]}>
          {/* Main Body Shell */}
          <mesh>
            <capsuleGeometry args={[0.55, 1.5, 10, 32]} />
            <meshStandardMaterial color="#f0f0f0" roughness={0.2} metalness={0.7} />
          </mesh>
          
          {/* Chest Detail / Logo Area */}
          <mesh position={[0, 0.4, 0.45]} rotation={[0.2, 0, 0]}>
            <boxGeometry args={[0.3, 0.4, 0.1]} />
            <meshStandardMaterial color="#111" roughness={0} metalness={1} />
          </mesh>
        </group>

        {/* Shoulders */}
        <mesh position={[0.75, 1.7, 0]}>
          <sphereGeometry args={[0.22, 32, 32]} />
          <meshStandardMaterial color="#ffffff" metalness={0.8} />
        </mesh>
        <mesh position={[-0.75, 1.7, 0]}>
          <sphereGeometry args={[0.22, 32, 32]} />
          <meshStandardMaterial color="#ffffff" metalness={0.8} />
        </mesh>

        {/* Arms (Upper) */}
        <mesh position={[0.85, 1, 0]} rotation={[0, 0, 0.15]}>
          <cylinderGeometry args={[0.12, 0.1, 1.2, 32]} />
          <meshStandardMaterial color="#222" metalness={1} />
        </mesh>
        <mesh position={[-0.85, 1, 0]} rotation={[0, 0, -0.15]}>
          <cylinderGeometry args={[0.12, 0.1, 1.2, 32]} />
          <meshStandardMaterial color="#222" metalness={1} />
        </mesh>
      </group>

      {/* Ground shadows for realism */}
      <ContactShadows 
        position={[0, -0.5, 0]} 
        opacity={0.4} 
        scale={15} 
        blur={2.5} 
        far={4.5} 
        resolution={512} 
        color="#000000" 
      />
      
      {/* Studio lighting environment */}
      <Environment preset="city" />
    </group>
  );
};

export default ThreeRobot;
