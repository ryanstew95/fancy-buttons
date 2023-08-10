import './App.css';
import { useState } from 'react';
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeaterButton from './components/TextRepeaterButton';
function App() {
  const [light, setLight] = useState('off');
  const dark = (light === 'off') ? 'dark' : '';
  const switchLight = () => setLight((light === 'on') ? 'off' : 'on'); 
  return (
    
    <div className={`App ${dark}`}>
      <h1>Fancy Buttons!</h1>
<AngryButton />
<CounterButton />
<LightSwitchButton light={light} switchLight={switchLight}/>
<TextRepeaterButton />
    </div>
  );
}

export default App;
