"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment, Text } from "@react-three/drei"
import type * as THREE from "three"

function MachineModel() {
  const meshRef = useRef<THREE.Mesh>(null)

  // Rotate the model slowly
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
    }
  })

  return (
    <group position={[0, 0, 0]} ref={meshRef}>
      {/* Base/Body - Black part */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 1, 1.5]} />
        <meshStandardMaterial color="#333333" roughness={0.7} metalness={0.3} />
      </mesh>

      {/* Hopper - Orange part */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <coneGeometry args={[1.2, 1.2, 4]} />
        <meshStandardMaterial color="#FF6B00" roughness={0.5} metalness={0.2} />
      </mesh>

      {/* Wheels - 4 wheels */}
      <mesh position={[-0.7, -0.6, 0.6]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#111111" roughness={0.8} />
      </mesh>
      <mesh position={[0.7, -0.6, 0.6]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#111111" roughness={0.8} />
      </mesh>
      <mesh position={[-0.7, -0.6, -0.6]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#111111" roughness={0.8} />
      </mesh>
      <mesh position={[0.7, -0.6, -0.6]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#111111" roughness={0.8} />
      </mesh>

      {/* Wheel rims - Orange */}
      <mesh position={[-0.7, -0.6, 0.65]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.05, 16]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#FF6B00" roughness={0.5} metalness={0.3} />
      </mesh>
      <mesh position={[0.7, -0.6, 0.65]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.05, 16]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#FF6B00" roughness={0.5} metalness={0.3} />
      </mesh>
      <mesh position={[-0.7, -0.6, -0.65]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.05, 16]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#FF6B00" roughness={0.5} metalness={0.3} />
      </mesh>
      <mesh position={[0.7, -0.6, -0.65]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.05, 16]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#FF6B00" roughness={0.5} metalness={0.3} />
      </mesh>

      {/* Discharge chute */}
      <mesh position={[0, -0.3, -0.9]} rotation={[Math.PI / 4, 0, 0]} castShadow>
        <boxGeometry args={[1, 0.1, 0.8]} />
        <meshStandardMaterial color="#444444" roughness={0.7} metalness={0.4} />
      </mesh>

      {/* Control handle */}
      <mesh position={[0, 0.6, -0.6]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.4, 16]} />
        <meshStandardMaterial color="#222222" roughness={0.7} />
      </mesh>

      {/* ERIMAK Logo background - White panel */}
      <mesh position={[0, 0.1, 0.76]} rotation={[0, 0, 0]}>
        <planeGeometry args={[1.5, 0.3]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* ERIMAK Text using drei Text component */}
      <Text
        position={[0, 0.1, 0.77]}
        fontSize={0.25}
        color="black"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Geist-Bold.ttf"
      >
        ERIMAK
      </Text>

      {/* Orange frame supports */}
      <mesh position={[-0.9, -0.2, 0]} castShadow>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#FF6B00" roughness={0.5} metalness={0.2} />
      </mesh>
      <mesh position={[0.9, -0.2, 0]} castShadow>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#FF6B00" roughness={0.5} metalness={0.2} />
      </mesh>
    </group>
  )
}

export default function MachineViewer3D() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-full w-full bg-gray-100 flex items-center justify-center">Carregando visualizador 3D...</div>
    )
  }

  return (
    <Canvas shadows dpr={[1, 2]}>
      <color attach="background" args={["#1a1a1a"]} />
      <fog attach="fog" args={["#1a1a1a", 5, 20]} />

      <PerspectiveCamera makeDefault position={[0, 1, 5]} fov={50} />

      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <spotLight position={[-5, 5, 5]} angle={0.3} penumbra={0.7} intensity={1.5} castShadow color="#ff6b00" />

      <group position={[0, -0.5, 0]}>
        <MachineModel />
      </group>

      <OrbitControls
        enablePan={false}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
        minDistance={3}
        maxDistance={8}
      />

      <Environment preset="warehouse" />

      {/* Floor/Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#333333" roughness={0.8} metalness={0.2} />
      </mesh>
    </Canvas>
  )
}
