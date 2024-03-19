import React, {useState, useEffect, useRef} from 'react';
import { Button } from 'antd';
import SimulationPage from './SimulationPage';
import '../styles/App.css';
import GraphPage from './GraphPage';


function App() {
  const [disabled, setDisabled] = useState(false)
  const [preSettingsValue, setPreSettingsValue] = useState(0)
  const [data, setData] = useState([])
  const [preSettingsText, setPreSettingsText] = useState("Revert Pre Settings")
  const [currentPage, setCurrentPage] = useState(0)

  const currentString = preSettingsText === "Revert Pre Settings" ? "Apply Pre Settings" : "Revert Pre Settings";

  const toggleDisabled = () => {
    setDisabled(!disabled)
  }

  const changeSettings = (e) => {
    setPreSettingsValue(e.target.value)
  }

  const changePreSettingsText = () => {
    setPreSettingsText(currentString)
  }

  const changeCurrentPage = (v) => {
    setCurrentPage(v)
  }

  const handleData = (e) => {
    setData(e);
  }


  return (
    <div className="App">
      <div className="HeaderContainer">
        <div className='HeaderList'>
          <Button type='primary' onClick={() => changeCurrentPage(0)}>Simulation</Button>
          <Button type='primary' onClick={() => changeCurrentPage(1)}>Graph</Button>
        </div>
      </div>

      <div className="ContentContainer">
        {currentPage === 0 ? 
        <SimulationPage disabled={disabled} currentString={currentString} preSettingsValue={preSettingsValue}
        toggleDisabled={toggleDisabled} changeSettings={changeSettings} changePreSettingsText={changePreSettingsText} handleData={handleData}
        /> : 
        <GraphPage data={data}/>
        }
      </div>
    </div>
  );
}

export default App;
