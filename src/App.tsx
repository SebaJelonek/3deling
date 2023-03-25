import { Canvas } from '@react-three/fiber';
import './App.css';
import { MySphere } from './Components/MySphere/MySphere';

function App() {
  return (
    <div className='App'>
      <div className='canvas-container'>
        <Canvas className='canvas'>
          <ambientLight intensity={0.1} />
          <directionalLight color='#F70096' position={[0, 1, 5]} />
          <mesh position={1.25}>
            <sphereGeometry args={[0.15, 32, 16]} />
            <meshStandardMaterial color='#FFAD00' />
          </mesh>
          <mesh position={-1.25}>
            <sphereGeometry args={[0.5, 32, 16]} />
            <meshNormalMaterial />
          </mesh>
          <mesh position={-0}>
            <sphereGeometry args={[0.5, 32, 16]} />
            <meshBasicMaterial color='#92FC00' />
          </mesh>
          <MySphere />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
