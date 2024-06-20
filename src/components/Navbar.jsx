// src/components/Navbar.js

import './Navbar.css';

const Navbar = ({search,setSearch,call,setCall}) => {
   

 
  // const handleSearch = () =>{
  //   console.log("search",search)
  // }

  return (
    <>
    <h1>Welcome to Recipe Master</h1>
    <nav className="navbar">
  
      <div className="navbar-brand">Recipe Master</div>
     
     <div className="navbar-search">
        <input type="text" placeholder="Search recipes..." onChange={(e)=>{setSearch (e.target.value)}}/>

        <button onClick={setCall}>search</button>
      </div>
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
