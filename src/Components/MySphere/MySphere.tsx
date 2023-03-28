import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Mesh } from 'three';

interface Props {
  startPosition: [number, number, number];
}

const RADIUS = 0.25;
const GRAVITY = 0.08;

export const MySphere: React.FC<Props> = ({ startPosition }) => {
  const ref = useRef<Mesh>(null!);
  const velocity = useRef(new THREE.Vector3(0.01, 0.05, 0));

  useFrame(({ clock }) => {
    ////////////////////// old implementation
    const bounds = 3;
    const delta = clock.elapsedTime;
    const circle = ref.current;

    circle.position.y -= GRAVITY * delta;
    circle.position.y += velocity.current.y;
    circle.position.x += velocity.current.x;

    if (circle.position.x < -bounds || circle.position.x > bounds) {
      velocity.current.x = -velocity.current.x;
    }
    if (circle.position.y < -bounds || circle.position.y > bounds) {
      velocity.current.y = -velocity.current.y;
    }
  });

  return (
    <mesh ref={ref} position={startPosition}>
      <circleBufferGeometry args={[RADIUS, 32, 16]} />
      <meshNormalMaterial />
    </mesh>
  );
};
