import React from 'react';

export const MySphere: React.FC = () => {
  return (
    <mesh position={0.75}>
      <sphereGeometry args={[0.24, 32, 16]} />
      <meshLambertMaterial color='#007EC1' />
    </mesh>
  );
};
