import React from 'react';
import { Navigate , Outlet} from 'react-router-dom';
import  Nav from './components/Nav';

const ProtectedRoute = ({ data }) => {
  const token = sessionStorage.getItem('token'); 

  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Outlet context={{ data }} />
    </>
  );
};

export default ProtectedRoute;
