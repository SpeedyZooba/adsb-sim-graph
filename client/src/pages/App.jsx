import React, {useState} from 'react';
import SimulationPage from './SimulationPage';
import GraphPage from './GraphPage';

import '../styles/App.css';

function App() {
  const [disabled, setDisabled] = useState(false)
  const [preSettingsValue, setPreSettingsValue] = useState(0)
  const [data, setData] = useState([])
  const [preSettingsText, setPreSettingsText] = useState("Change Filters")
  const [opcode, setOpcode] = useState(0)

  const currentString = preSettingsText === "Change Filters" ? "Set Filters" : "Change Filters";

  const toggleDisabled = () => {
    setDisabled(!disabled)
  }

  const changeSettings = (e) => {
    setPreSettingsValue(e.target.value)
  }

  const changePreSettingsText = () => {
    setPreSettingsText(currentString)
  }

  const handleData = (e) => {
    setData(e);
  }

  const handleOpcode = (e) => {
    setOpcode(e.target.value)
  }

  return (
    <div className="App">

      <div style={{display:"flex", flexDirection:"column"}}>
        <div className="ContentContainer">
          <SimulationPage disabled={disabled} currentString={currentString} preSettingsValue={preSettingsValue}
          toggleDisabled={toggleDisabled} changeSettings={changeSettings} changePreSettingsText={changePreSettingsText} handleData={handleData}
          handleOpcode={handleOpcode} opcode={opcode} />
        </div>

        <div className='ContentContainer'>
          <GraphPage data={data} opcode={opcode}/>
        </div>
      </div>

    </div>
  );
}

export default App;
