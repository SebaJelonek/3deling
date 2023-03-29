import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Mesh } from 'three';

interface Props {
  velocity: [number, number, number];
}

const RADIUS = 0.25;
const GRAVITY = new THREE.Vector3(0, -0.00006, 0);
const VELOCITY = new THREE.Vector3(
  0.0000000000000000000008,
  0.0000000000000000000005,
  0
);
const GROUND = -3;
const WALL = 3;
const boundsRadius = 3.73;

export const MySphere: React.FC<Props> = ({ velocity }) => {
  const ref = useRef<Mesh>(null!);
  const realVelocity = new THREE.Vector3(...velocity);

  useFrame(() => {
    const position = ref.current.position;
    position.add(realVelocity);
    realVelocity.add(GRAVITY);

    const distanceFromOrigin = Math.sqrt(position.x ** 2 + position.y ** 2);

    if (distanceFromOrigin > boundsRadius) {
      // Calculate the normal vector of the sphere's position on the surface of the bounds
      const normal = {
        x: position.x / distanceFromOrigin,
        y: position.y / distanceFromOrigin,
      };

      // Reflect the velocity vector across the normal
      const dotProduct = realVelocity.x * normal.x + realVelocity.y * normal.y;

      realVelocity.setX(-1 * dotProduct * normal.x);
      realVelocity.setY(-1 * dotProduct * normal.y);
    }

    // old
    // if (position.y - RADIUS < GROUND) {
    //   VELOCITY.setY(Math.abs(-VELOCITY.y) * 0.9);
    // }

    // if (position.x - RADIUS > WALL || position.x - RADIUS < -WALL) {
    //   VELOCITY.setX(-VELOCITY.x);
    // }
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <circleBufferGeometry args={[RADIUS, 32, 16]} />
      <meshNormalMaterial />
    </mesh>
  );
};
