import React from 'react';

interface Props {
  position?: [number, number];
  rotation?: [number, number, number];
  radius: number;
}

export const MyRing: React.FC<Props> = ({ position, rotation, radius }) => {
  return (
    <mesh position={[0, 0, 0]}>
      <ringGeometry args={[radius, 3.8, 128, 16]} />
      <meshNormalMaterial />
    </mesh>
  );
};
