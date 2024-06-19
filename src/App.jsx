import './App.css'
import Navbar from './Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Multiple  from './Multiple';

function App() {

  return (
    <>
            <Navbar/>
      <div>
        <h1>Recipe Master</h1>
      </div>
       
      <BrowserRouter>
          <Routes>
            <Route path="Grousery" element={<Multiple />}/>

          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App