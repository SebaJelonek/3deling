import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface Props {
  position: [number, number];
}

export const MyBox: React.FC<Props> = ({ position }) => {
  const myMesh = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    const c = clock.getElapsedTime();
    myMesh.current.rotation.x = c;
    myMesh.current.rotation.y = c * 2;
    myMesh.current.translateZ(c / 1000);
  });

  return (
    <mesh position={[...position, 0]} ref={myMesh}>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  );
};
