import React from 'react';
import {
  RING_RADIUS,
  CIRCLE_RADIUS,
} from '../../Utils/GlobalConsts/GlobalConsts';
import { circleArray } from '../../Utils/CircleArray/CircleArray';
import { Canvas } from '@react-three/fiber';
import { MySphere } from '../MySphere/MySphere';
import { MyRing } from '../MyRing/MyRing';

export const MyScene: React.FC = () => {
  const circles = circleArray();

  return (
    <Canvas className='canvas'>
      <ambientLight intensity={0.1} />
      <directionalLight color='#333' position={[0, 1, 5]} />
      <MyRing radius={RING_RADIUS} />
      {circles.map(({ velocity, position }, i: number) => (
        <MySphere
          velocity={velocity}
          circlesArray={circles}
          key={i}
          radius={CIRCLE_RADIUS}
          ringRadius={RING_RADIUS}
          index={i}
        />
      ))}
    </Canvas>
  );
};
