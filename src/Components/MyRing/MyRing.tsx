import React from 'react';

interface Props {
  position?: [number, number];
  rotation?: [number, number, number];
}

export const MyRing: React.FC<Props> = ({ position, rotation }) => {
  return (
    <mesh position={[0, 0, 0]}>
      <ringGeometry args={[3.73, 3.8, 128, 16]} />
      <meshNormalMaterial />
    </mesh>
  );
};
