import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Nav = ({ search, setSearch, call, setCall }) => {
  const isAuthenticated = !!sessionStorage.getItem('token');
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success('Logout successful!');
    console.log("logout")
    setTimeout(() => {
      sessionStorage.removeItem('token');
      navigate('/login');
    }, 2000);
  };

  return (
    <>
      <nav className="bg-white shadow-md text-gray-800">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex space-x-4 ">
            {/* <Link to="/" className="hover:text-gray-600">
              Home
            </Link> */}
            {/* Add your logo image here */}
            {/* <img src="/images/logo1.jpeg" alt="Logo" className="h-10 w-16 -ml-4 mr-4 " /> */}
            <h3 className="text-3xl font-bold font-logo ">Recepi-Master</h3>
            {isAuthenticated && (
              <>
            <Link to="/" className="hover:text-gray-600">
              Home
            </Link>
            <Link to="/dashboard" className="hover:text-gray-600 mx-3">
                Dashboard
              </Link>
            <Link to="/about" className="hover:text-gray-600">
              About
            </Link>
            <Link to="/contact" className="hover:text-gray-600">
              Contact
            </Link>
            <Link to="/products" className="hover:text-gray-600">
              Products
            </Link>
            <Link to="/tricks" className="hover:text-gray-600">
              Tips & Tricks
            </Link>
            <Link to="/quick" className="hover:text-gray-600">
              Quick-Cooking
            </Link>
            <Link to="/index" className="hover:text-gray-600">
              [A-Z index]
            </Link>
              </>
              
            )}
            {/* <Link to="/about" className="hover:text-gray-600">
              About
            </Link>
            <Link to="/contact" className="hover:text-gray-600">
              Contact
            </Link>
            <Link to="/products" className="hover:text-gray-600">
              Products
            </Link>
            <Link to="/tricks" className="hover:text-gray-600">
              Tips & Tricks
            </Link>
            <Link to="/quick" className="hover:text-gray-600">
              Quick-Cooking
            </Link>
            <Link to="/index" className="hover:text-gray-600">
              [A-Z index]
            </Link> */}
          </div>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                {/* <button
                  className="ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200"
                  onClick={handleLogout}
                >
                  Logout
                </button> */}
              </>
            ) : (
              <Link to="/login" className="hover:text-gray-600 text-xl font-bold">
                Login
              </Link>
            )}
            {location.pathname === '/dashboard' && (
              <>
              <div className="flex items-center">

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
                  placeholder="Search recipes..."
                />
                <button
                  className="ml-2 px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
                  onClick={setCall}
                >
                  Search
                </button>
              </div>

             
                </>
            )}
            {isAuthenticated ? (
              <>
                <button
                  className="ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) :
            null }
          </div>
        </div>
      </nav>
      <ToastContainer position="bottom-right" autoClose={1000} />
    </>
  );
};

export default Nav;
