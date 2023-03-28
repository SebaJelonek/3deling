import React from 'react';
import { usePlane } from '@react-three/p2';

interface Props {
  position: [number, number];
  rotation: [number, number, number];
}

export const MyPlane: React.FC<Props> = ({ position, rotation }) => {
  const [myMesh] = usePlane(() => ({
    rotation: Math.PI,
    position,
    gravity: [-100, 100000000, 0],
  }));

  return (
    <mesh ref={myMesh}>
      <planeGeometry args={[100]} />
      <meshNormalMaterial />
    </mesh>
  );
};
