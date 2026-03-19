"use client";
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Environment, Float, ContactShadows } from '@react-three/drei';
import GradientText from './GradientText';
import InteractiveDataSquares from './InteractiveDataSquares';

export default function Scene() {
  return (
    <Canvas 
      className="w-full h-full" 
      gl={{ alpha: true, antialias: true }} 
      dpr={[1, 2]}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
      
      {/* LIGHTING - Essential for the Name and Particles to be visible */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      
      <Suspense fallback={null}>
        {/* Particles float in the background and foreground */}
        <InteractiveDataSquares count={450} />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <GradientText />
        </Float>
        
        <Environment preset="city" />
        <ContactShadows opacity={0.4} scale={20} blur={2.4} far={4.5} />
      </Suspense>
    </Canvas>
  );
}