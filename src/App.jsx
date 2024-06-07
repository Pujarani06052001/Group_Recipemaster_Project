// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import ImageGrid from './components/ImageGrid';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      {/* <h1>Welcome to Recipe Master</h1> */}
      <ImageGrid />
    </div>
  );
};

export default App;
