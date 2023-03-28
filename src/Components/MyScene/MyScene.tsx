import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { MySphere } from '../MySphere/MySphere';
import { MyRing } from '../MyRing/MyRing';

export const MyScene: React.FC = () => {
  const [spheres, setSpheres] = useState<[[number, number, number]]>([
    [Math.random(), Math.random(), 0],
  ]);
  useEffect(() => {
    let newSpheres: [[number, number, number]] = [...spheres];
    for (let index = 0; index < 19; index++) {
      const position: [number, number, number] = [
        Math.random(),
        Math.random(),
        0,
      ];
      newSpheres.push(position);
    }
    setSpheres(newSpheres);
  }, []);

  return (
    <Canvas className='canvas'>
      <ambientLight intensity={0.1} />
      <directionalLight color='#333' position={[0, 1, 5]} />
      <MyRing />
      {spheres.map((sphere: [number, number, number], i: number) => (
        <MySphere startPosition={sphere} key={i} />
      ))}
    </Canvas>
  );
};
