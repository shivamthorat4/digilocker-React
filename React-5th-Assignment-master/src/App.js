import React,{useState} from 'react';
import './App.css';
import Headerlogo from './Headerlogo.png';
import Header from './components/Header';
import ToggleSwitch from './components/Toggle';
import Timecomponent from './components/Timecomponent';

const App = () => {
  const [toggled,setToggled] = useState(false);

  return (
    <div className="App">
      <Header/>
      <ToggleSwitch label="Date" src={Headerlogo} onChange={(event)=> setToggled(event.target.checked)}/>
      <Timecomponent switch={toggled} />
    </div>
  );
}

export default App;
