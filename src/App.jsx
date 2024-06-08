// src/App.js

import Navbar from './components/Navbar';
import ImageGrid from './components/ImageGrid';
import './App.css';
import {useState} from "react"

const App = () => {

  const [search , setSearch] = useState("banana")
  
  const [call,setCall] = useState(false)


  return (
    <div className="App">
      <Navbar search={search} setSearch={setSearch} call={call} setCall={setCall}/>
      {/* <h1>Welcome to Recipe Master</h1> */}
      <ImageGrid  search={search} setSearch={setSearch} call={call} setCall={setCall} />
    </div>
  );
};

export default App;
