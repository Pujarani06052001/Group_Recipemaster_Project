import React from 'react';
import { Navigate , Outlet} from 'react-router-dom';
import  Nav from './components/Nav';
import Footer from './components/Footer';

const ProtectedRoute = ({ data }) => {
  const token = sessionStorage.getItem('token'); 

  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Outlet context={{ data }} />
      <Footer />
    </>
  );
};

export default ProtectedRoute;
