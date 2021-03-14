import './App.css';
import Border from './components/Border';
import Face from './components/Face';
import Dial from './components/Dial';
import RoomTemperatureController from './components/RoomTemperatureController';
import { useState } from 'react';
import { useMachine } from '@xstate/react';
import states from './States';
import BusinessLogic from './BusinessLogic';

function App() {
  const [tc, setTc] = useState(72);
  const onTCChange = (val) => {
    setTc(val);
    handler();
  }
  const [tt,setTt] = useState(72);
  const onTTChange = (val) => {
    setTt(val);
    handler();
  }
  const bizLogic = new BusinessLogic(tc, tt, 2, 1.5, 1);
  const [currentMode, send] = useMachine(states);
  const handler = () => {
    const resultingEvent = bizLogic.thermostatModeSelect(tc, tt, currentMode.value);
    send(resultingEvent);
  }
  return (
    <>
    <div className="Wrapper">
      <Border/>
      <Face tc={tc} tt={tt} mode={currentMode.value}/>
      <Dial/>
    </div>
    <RoomTemperatureController tc={tc} onTCChange={onTCChange}/>
    </>
  );
}

export default App;
