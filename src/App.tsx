import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/p2';
import { MyBox } from './Components/MyBox/MyBox';
import { MySphere } from './Components/MySphere/MySphere';
import { MyPlane } from './Components/MyRing/MyRing';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='canvas-container'>
        <Canvas className='canvas'>
          <ambientLight intensity={0.1} />
          <directionalLight color='#333' position={[0, 1, 5]} />
          <mesh position={[0, 0, 0]}>
            <ringGeometry args={[3.73, 3.8, 128, 16]} />
            <meshNormalMaterial />
          </mesh>
          <MySphere startPosition={[0, 0, 0]} />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
