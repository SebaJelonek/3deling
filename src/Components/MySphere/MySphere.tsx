import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Mesh } from 'three';
import { collisionWithRing } from '../../Utils/CollisionWithRing/CollisionWithRing';

interface Props {
  velocity: THREE.Vector3;
  circlesArray: {
    position: THREE.Vector3;
    velocity: THREE.Vector3;
  }[];
  radius: number;
  ringRadius: number;
  index: number;
}

const GRAVITY = new THREE.Vector3(0, -0.00006, 0);

export const MySphere: React.FC<Props> = ({
  velocity,
  circlesArray,
  radius,
  ringRadius,
  index,
}) => {
  const ref = useRef<Mesh>(null!);

  useFrame(() => {
    const position = ref.current.position;

    circlesArray.forEach((_, i) => {
      for (let j = i; j < circlesArray.length; j++) {
        const otherCircle = circlesArray[j];
        const distance = position.distanceTo(otherCircle.position);
        if (distance <= radius + radius) {
          // Calculate collision normal and relative velocity
          const collisionNormal = position
            .clone()
            .sub(otherCircle.position)
            .normalize();
          const relativeVelocity = velocity.clone().sub(otherCircle.velocity);

          // Calculate speed along collision normal
          const speedAlongNormal = relativeVelocity.dot(collisionNormal);

          // Check if circles are moving towards each other
          if (speedAlongNormal > 0) {
            return;
          }
          const mass = radius ** 2;

          // Calculate impulse magnitude
          const impulseMagnitude =
            (-1.95 * speedAlongNormal) / (1 / mass + 1 / mass);

          // Calculate impulse and update velocities
          const impulse = collisionNormal
            .clone()
            .multiplyScalar(impulseMagnitude);
          velocity.add(impulse.clone().divideScalar(mass));
          otherCircle.velocity.sub(impulse.clone().divideScalar(mass));

          // Update positions
          position.add(velocity);
          otherCircle.position.add(otherCircle.velocity);
        }
      }
      velocity.add(GRAVITY);
    });

    collisionWithRing(radius, ringRadius, position, velocity);
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <circleBufferGeometry args={[radius, 32, 16]} />
      <meshNormalMaterial />
    </mesh>
  );
};
