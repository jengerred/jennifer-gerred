"use client";
import React, { useRef, useMemo, useLayoutEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center, Float } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

export default function GradientText() {
  const groupRef = useRef<THREE.Group>(null);
  const firstNameRef = useRef<THREE.Group>(null);
  const lastNameRef = useRef<THREE.Group>(null);

  const materials = useMemo(() => {
    const vertexShader = `
      varying vec3 vPosition; 
      void main() { 
        vPosition = position; 
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); 
      }`;
    
    const fragmentShaderStr = `
      varying vec3 vPosition;
      void main() {
        vec3 pink = vec3(0.92, 0.28, 0.60);
        vec3 lightPurp = vec3(0.75, 0.52, 0.99);
        vec3 babyBlue = vec3(0.49, 0.83, 0.99);
        float h = (vPosition.x + 0.5) / 4.5; 
        float v = (vPosition.y + 0.5) / 1.0;
        float mixScore = clamp(h * 0.85 + (1.0 - v) * 0.15, 0.0, 1.0);
        vec3 finalColor = mixScore < 0.45 
          ? mix(pink, lightPurp, mixScore / 0.45) 
          : mix(lightPurp, babyBlue, (mixScore - 0.45) / 0.55);
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;
    
    return [
      new THREE.ShaderMaterial({ vertexShader, fragmentShader: fragmentShaderStr }),
      new THREE.ShaderMaterial({ 
        vertexShader, 
        fragmentShader: fragmentShaderStr.replace(
          'gl_FragColor = vec4(finalColor, 1.0);', 
          'gl_FragColor = vec4(finalColor * 0.15, 1.0);'
        ) 
      })
    ]; 
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mainTl = gsap.timeline();

      gsap.set(groupRef.current!.position, { x: 0, y: 0.7, z: 0 });
      gsap.set([firstNameRef.current!.position, lastNameRef.current!.position], { y: 25 });

      mainTl
        // 1. Entrance
        .to(firstNameRef.current!.position, { y: 0.42, duration: 0.8, ease: "power4.out" })
        .to(lastNameRef.current!.position, { y: -0.42, duration: 0.8, ease: "power4.out" }, "-=0.5")
        
        // 2. Shrink and Flight
        .addLabel("shrink")
        .to(groupRef.current!.scale, { 
          x: 0.075, y: 0.075, z: 0.075, 
          duration: 0.9, 
          ease: "power2.inOut" 
        }, "shrink")
        
        .to(groupRef.current!.position, { 
          x: -6.2, 
          y: 4.5,  
          duration: 1.8, // Increased for a more majestic feel
          ease: "power3.inOut" // Changed from expo for a smoother landing
        }, "shrink")
        
        .to(groupRef.current!.rotation, { 
          y: Math.PI * 4, 
          duration: 1.8, 
          ease: "power3.inOut" 
        }, "shrink")

        // 3. The Hand-off logic
        // Trigger logo reveal earlier to allow the fade-in to complete as the text arrives
        .add(() => {
          window.dispatchEvent(new CustomEvent('toggle-logo', { detail: { show: true } }));
        }, "-=0.5") 

        .add(() => {
          window.dispatchEvent(new CustomEvent('start-cards-reveal'));
        }, "shrink+=0.6") 
        
        // Add a tiny buffer before hiding the 3D object to prevent the 'flicker'
        .to({}, { duration: 0.1 }) 
        .set(groupRef.current!, { visible: false });
    });
    return () => ctx.revert();
  }, []);

  useFrame((state) => {
    if (!groupRef.current || !groupRef.current.visible) return;
    const { x, y } = state.mouse;
    if (groupRef.current.scale.x > 0.5) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, (x * 0.08), 0.02);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, (-y * 0.04), 0.02);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.2}>
        <Center ref={firstNameRef} position={[0, 0.42, 0]}>
          <Text3D font="/fonts/inter_bold.json" size={0.7} height={0.2} letterSpacing={0.12} material={materials}>
            JENNIFER
          </Text3D>
        </Center>
        <Center ref={lastNameRef} position={[0, -0.42, 0]}>
          <Text3D font="/fonts/inter_bold.json" size={0.7} height={0.2} letterSpacing={0.12} material={materials}>
            GERRED
          </Text3D>
        </Center>
      </Float>
    </group>
  );
}