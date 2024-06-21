import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Glossary from './components/Glossary';
import TipsAndTricks from './components/TipsAndTricks';

const App = () => {
  const [activeButton, setActiveButton] = useState('TipsAndTricks');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleButtonClick('TipsAndTricks')}>Tips&Tricks</button>
        <button onClick={() => handleButtonClick('Glossary')}>Glossary</button>
        <button onClick={() => handleButtonClick('About')}>About</button>
      </div>
      <div>
        {activeButton === 'TipsAndTricks' && <TipsAndTricks />}
        {activeButton === 'Glossary' && <Glossary />}
        {activeButton === 'About' && <About />}
      </div>
    </div>
  );
}

export default App;
