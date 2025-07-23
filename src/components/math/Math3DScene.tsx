'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls, Float, Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

// Floating Mathematical Symbol Component
function FloatingSymbol({ 
  position, 
  symbol, 
  color = '#3b82f6',
  size = 1 
}: { 
  position: [number, number, number];
  symbol: string;
  color?: string;
  size?: number;
}) {
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[-0.5, 0.5]}
    >
      <Text
        position={position}
        fontSize={size}
        color={color}
        anchorX="center"
        anchorY="middle"
        font="/fonts/math-font.woff"
      >
        {symbol}
      </Text>
    </Float>
  );
}

// Rotating Geometric Shape
function RotatingShape({ 
  position, 
  type = 'box',
  color = '#06b6d4',
  size = 1 
}: {
  position: [number, number, number];
  type?: 'box' | 'sphere' | 'torus';
  color?: string;
  size?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  const ShapeComponent = {
    box: Box,
    sphere: Sphere,
    torus: Torus,
  }[type];

  return (
    <ShapeComponent ref={meshRef} position={position} args={[size, size, size]}>
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.7}
        wireframe
      />
    </ShapeComponent>
  );
}

// Mathematical Grid
function MathGrid() {
  const gridRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  const gridLines = useMemo(() => {
    const lines = [];
    const size = 10;
    const divisions = 20;
    
    for (let i = 0; i <= divisions; i++) {
      const position = (i / divisions - 0.5) * size;
      
      // Horizontal lines
      lines.push(
        <line key={`h-${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([
                -size/2, 0, position,
                size/2, 0, position
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#3b82f6" opacity={0.2} transparent />
        </line>
      );
      
      // Vertical lines
      lines.push(
        <line key={`v-${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([
                position, 0, -size/2,
                position, 0, size/2
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#3b82f6" opacity={0.2} transparent />
        </line>
      );
    }
    
    return lines;
  }, []);

  return (
    <group ref={gridRef} position={[0, -2, 0]}>
      {gridLines}
    </group>
  );
}

// Main 3D Scene Component
function Scene() {
  const symbols = ['π', '∑', '∫', '∞', 'α', 'β', 'θ', '∆'];
  const shapes = ['box', 'sphere', 'torus'] as const;

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />

      {/* Mathematical Symbols */}
      {symbols.map((symbol, index) => (
        <FloatingSymbol
          key={symbol}
          position={[
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 8
          ]}
          symbol={symbol}
          color={index % 2 === 0 ? '#3b82f6' : '#06b6d4'}
          size={0.5 + Math.random() * 0.5}
        />
      ))}

      {/* Geometric Shapes */}
      {Array.from({ length: 6 }, (_, index) => (
        <RotatingShape
          key={index}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 10
          ]}
          type={shapes[index % shapes.length]}
          color={index % 2 === 0 ? '#3b82f6' : '#06b6d4'}
          size={0.3 + Math.random() * 0.4}
        />
      ))}

      {/* Mathematical Grid */}
      <MathGrid />

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

// Main Component
export function Math3DScene({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 2, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

export default Math3DScene;