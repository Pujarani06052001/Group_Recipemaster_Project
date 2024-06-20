import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Products from './components/pages/Products';
import About from './components/pages/About';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Footer from './components/Footer';
import ProtectedRoute from './ProtectedRoute';
import Nav from './components/Nav';
import ImageGrid from './components/ImageGrid';
import Quick from './components/pages/Quick';
import Index from './components/pages/Index';
import Tricks from './components/pages/Tricks';
import Chinese from './components/Chinese';
import { Italian } from './components/Italian';

const App = () => {
  const [search, setSearch] = useState('');
  const [call, setCall] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = (searchTerm = 'banana') => {
    setLoading(true);
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${searchTerm}&key=8d488d17-fae0-474f-a48f-b7eab7d8c578`, {
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((res) => {
        setData(res.data.recipes);
        console.log('API data:', res.data.recipes);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData(search);
  }, [call]);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Nav search={search} setSearch={setSearch} call={call} setCall={setCall} />
        <div className="flex-grow">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/Quick' element={<Quick />}/>
            <Route path='/index' element={<Index/>}/>
            <Route path='/tricks' element={<Tricks/>}/>
            <Route path="/products" element={<Products />} /> */}
            <Route element={<ProtectedRoute />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path='/Quick' element={<Quick />}/>
                  <Route path='/index' element={<Index/>}/>
                  <Route path='/tricks' element={<Tricks/>}/>
                  <Route path="/products" element={<Products />} />
                    <Route path="/dashboard" element={<ImageGrid data={data} loading={loading} />} />
                  <Route Path = "/chinese" element={<Chinese/>}/>
                  <Route Path = "/italian" element={<Italian/>}/>
            </Route>
          </Routes>
      


        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
