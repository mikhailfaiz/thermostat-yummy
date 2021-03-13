import './App.css';
import Border from './components/Border';
import Face from './components/Face';
import Dial from './components/Dial';
import RoomTemperatureController from './components/RoomTemperatureController';
import { useState } from 'react';

function App() {
  const [tc, setTc] = useState(72);
  const onTCChange = (val) => {
    setTc(val);
  }
  const [tt,setTt] = useState(72);
  const onTTChange = (val) => {
    setTt(val);
  }
  return (
    <>
    <div className="Wrapper">
      <Border/>
      <Face tc={tc} tt={tt}/>
      <Dial/>
    </div>
    <RoomTemperatureController tc={tc} onTCChange={onTCChange}/>
    </>
  );
}

export default App;
