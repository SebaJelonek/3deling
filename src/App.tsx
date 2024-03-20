import { MyScene } from './Components/MyScene/MyScene';
import './App.css';
import 'dotenv/config';

console.log(process.env.REACT_APP_API_KEY)
console.log('change');

function App() {
  return (
    <div className='App'>
      <div className='canvas-container'>
        <MyScene />
      </div>
    </div>
  );
}

export default App;
