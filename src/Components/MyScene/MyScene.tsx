import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { MySphere } from '../MySphere/MySphere';
import { MyRing } from '../MyRing/MyRing';

export const MyScene: React.FC = () => {
  const [spheres, setSpheres] = useState<[[number, number, number]]>([
    [0, 0, 0],
  ]);

  useEffect(() => {
    const newSpheres: [[number, number, number]] = [...spheres];
    newSpheres.pop();
    for (let index = 0; index < 10; index++) {
      const velocity1: [number, number, number] = [
        Math.random() / 100,
        Math.random() / 100,
        0,
      ];
      const velocity2: [number, number, number] = [
        (Math.random() * -1) / 100,
        Math.random() / 100,
        0,
      ];
      newSpheres.push(velocity1);
      newSpheres.push(velocity2);
    }
    setSpheres(newSpheres);
  }, []);

  return (
    <Canvas className='canvas'>
      <ambientLight intensity={0.1} />
      <directionalLight color='#333' position={[0, 1, 5]} />
      <MyRing />
      {spheres.map((sphere: [number, number, number], i: number) => (
        <MySphere velocity={sphere} key={i} />
      ))}
    </Canvas>
  );
};
