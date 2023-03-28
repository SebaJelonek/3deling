import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Mesh } from 'three';

interface Props {
  startPosition: [number, number, number];
}

const RADIUS = 0.25;
const GRAVITY = new THREE.Vector3(0, -0.0006, 0);
const VELOCITY = new THREE.Vector3(0.08, 0.05, 0);
const GROUND = -3;
const WALL = 3;

export const MySphere: React.FC<Props> = ({ startPosition }) => {
  const ref = useRef<Mesh>(null!);

  useFrame(() => {
    const position = ref.current.position;
    position.add(VELOCITY);
    VELOCITY.add(GRAVITY);

    if (position.y - RADIUS < GROUND) {
      VELOCITY.setY(Math.abs(-VELOCITY.y) * 0.9);
    }
    if (position.x - RADIUS > WALL || position.x - RADIUS < -WALL) {
      VELOCITY.setX(-VELOCITY.x);
    }
  });

  return (
    <mesh ref={ref} position={startPosition}>
      <circleBufferGeometry args={[RADIUS, 32, 16]} />
      <meshNormalMaterial />
    </mesh>
  );
};
