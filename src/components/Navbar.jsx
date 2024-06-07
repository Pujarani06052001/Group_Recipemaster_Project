// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
    <h1>Welcome to Recipe master</h1>
    <nav className="navbar">
      {/* <div className="navbar-brand">Recipe Master</div> */}
      {/* <div className="navbar-search">
        <input type="text" placeholder="Search recipes..." />
      </div> */}
      <div className="navbar-icons">
        <i className="fas fa-user"></i>
        <i className="fas fa-heart"></i>
        <i className="fas fa-shopping-cart"></i>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
