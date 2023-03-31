import * as THREE from 'three';

export const circleArray = () => {
  const circles: {
    velocity: THREE.Vector3;
    position: THREE.Vector3;
  }[] = [];

  for (let index = 0; index < 3; index++) {
    const circlesNegativeX = {
      velocity: new THREE.Vector3(
        (Math.random() * -1) / 100,
        Math.random() / 100,
        0
      ),
      position: new THREE.Vector3(0, 0, 0),
    };

    const circlesPositiveX = {
      velocity: new THREE.Vector3(Math.random() / 100, Math.random() / 100, 0),
      position: new THREE.Vector3(0, 0, 0),
    };
    circles.push(circlesNegativeX, circlesPositiveX);
  }

  return circles;
};
