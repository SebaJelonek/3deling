export function collisionWithRing(
  radius: number,
  ringRadius: number,
  position: THREE.Vector3,
  velocity: THREE.Vector3
) {
  const distanceFromOrigin = Math.sqrt(position.x ** 2 + position.y ** 2);

  if (distanceFromOrigin + radius > ringRadius) {
    // Calculate the normal vector of the sphere's position on the surface of the bounds
    const normal = {
      x: position.x / distanceFromOrigin,
      y: position.y / distanceFromOrigin,
    };
    // Reflect the velocity vector across the normal
    const dotProduct = velocity.x * normal.x + velocity.y * normal.y;
    velocity.setX(-1 * dotProduct * normal.x);
    velocity.setY(-1 * dotProduct * normal.y);
  }
}
