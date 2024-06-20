import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Heading from './components/Heading';
import Products from '.components/Products'

function App() {
  return (
    <>
      <Heading/>
      <Products/>
      <BrowserRouter>
        
        <Routes>
          <Route path='/home' element={<h1 className="text-center pt-5">Home Pages</h1>}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;