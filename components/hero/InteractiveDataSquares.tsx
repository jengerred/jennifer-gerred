"use client";
import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function InteractiveDataSquares({ count = 400 }) {
  const points = useRef<THREE.Points>(null!);
  const { mouse, viewport } = useThree();
  const colors = ['#00d2ff', '#c084fc', '#ec4899'];
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        x: (Math.random() - 0.5) * 25,
        y: (Math.random() - 0.5) * 18,
        z: (Math.random() - 0.5) * 10,
        initialX: 0, initialY: 0,
        color: new THREE.Color(colors[i % 3])
      });
      temp[i].initialX = temp[i].x;
      temp[i].initialY = temp[i].y;
    }
    return temp;
  }, [count]);

  const [geo, mat] = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colorsAttr = new Float32Array(count * 3);
    particles.forEach((p, i) => {
      positions.set([p.x, p.y, p.z], i * 3);
      colorsAttr.set([p.color.r, p.color.g, p.color.b], i * 3);
    });
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colorsAttr, 3));
    return [geometry, new THREE.PointsMaterial({ size: 0.15, vertexColors: true, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending })];
  }, [particles, count]);

  useFrame(() => {
    if (!points.current) return;
    const posAttr = points.current.geometry.attributes.position;
    const mx = (mouse.x * viewport.width) / 2;
    const my = (mouse.y * viewport.height) / 2;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      let px = posAttr.array[i3], py = posAttr.array[i3 + 1];
      const dx = px - mx, dy = py - my, dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 4) {
        const force = (4 - dist) * 0.04;
        posAttr.array[i3] += (dx / dist) * force;
        posAttr.array[i3 + 1] += (dy / dist) * force;
      }
      posAttr.array[i3] += (particles[i].initialX - px) * 0.02;
      posAttr.array[i3 + 1] += (particles[i].initialY - py) * 0.02;
    }
    posAttr.needsUpdate = true;
  });

  return <points ref={points} geometry={geo} material={mat} />;
}