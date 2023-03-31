import React, { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { circleArray } from '../../Utils/CircleArray/CircleArray';
import { GRAVITY } from '../../Utils/GlobalConsts/GlobalConsts';
import { collisionWithRing } from '../../Utils/CollisionWithRing/CollisionWithRing';
import { MySphere } from '../MySphere/MySphere';
import * as THREE from 'three';

interface Props {
  circleRadius: number;
  ringRadius: number;
}

export const CircleContainer: React.FC<Props> = ({
  circleRadius,
  ringRadius,
}) => {
  const [circlesArray, setCirclesArray] = useState(circleArray());

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const GRAVITY = [0, -9.8, 0];

    const updatedCircleData = circlesArray.map((circle, i) => {
      const position = circle.position;
      const velocity = circle.velocity;

      // Update velocity
      velocity.add(new THREE.Vector3().fromArray(GRAVITY).multiplyScalar(time));

      const newPosition = circle.position.clone().add(circle.velocity);
      circle.position.set(newPosition.x, newPosition.y, 0);

      // Check for collision with other circles
      for (let j = i; j < circlesArray.length; j++) {
        const otherCircle = circlesArray[j];
        const otherPosition = otherCircle.position;

        const distance = position.distanceTo(otherPosition);
        const radius = 0.5;

        if (distance <= radius + radius) {
          // Calculate collision normal and relative velocity
          const collisionNormal = position
            .clone()
            .sub(otherPosition)
            .normalize();
          const relativeVelocity = velocity.clone().sub(otherCircle.velocity);

          // Calculate speed along collision normal
          const speedAlongNormal = relativeVelocity.dot(collisionNormal);

          // Check if circles are moving towards each other
          if (speedAlongNormal > 0) {
            continue;
          }

          const mass = radius ** 2;

          // Calculate impulse magnitude
          const impulseMagnitude =
            (-2 * speedAlongNormal) / (1 / mass + 1 / mass);

          // Calculate impulse and update velocities
          const impulse = collisionNormal
            .clone()
            .multiplyScalar(impulseMagnitude);
          velocity.add(impulse.clone().divideScalar(mass));
          otherCircle.velocity.sub(impulse.clone().divideScalar(mass));
        }
      }

      return { position, velocity };
    });

    setCirclesArray(updatedCircleData);
  });

  return (
    <mesh position={[0, 0, 0]}>
      {/* {circlesArray.map((_, i) => (
        // <MySphere key={i} radius={circleRadius} />
      ))} */}
    </mesh>
  );
};
