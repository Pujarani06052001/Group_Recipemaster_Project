import React, { useState } from 'react';
import './App.css';
import Our from './components/Our';
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
        <button onClick={() => handleButtonClick('Our')}>Our Programs</button>
      </div>
      <div>
        {activeButton === 'TipsAndTricks' && <TipsAndTricks />}
        {activeButton === 'Glossary' && <Glossary />}
        {activeButton === 'Our' && <Our />}
      </div>
    </div>
  );
}

export default App;
