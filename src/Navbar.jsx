const Navbar = () => {
    return (
        <>
        <div className="navbar">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzZ7IMaYVTbYsTyOOrelOHG7iScussAr_MBA&s" />
            <a href="https://www.recipetineats.com/" className="active">Home</a>
            <a href="Grousery">[A-Z]Index</a>
            <a href="Recipes">Recipes-List</a>
            <input className="input" type="text" placeholder="Enter a Grocery"/>
            <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlJNDOU-G_CL6NQv_fDCgps3Mqq1QFXPRK0rXyRAXf2_u_hyZ6UPb45zGvGt1BbT1fic&usqp=CAU"/>
            <a className="login" href="#Login">Login</a>
            <a  className="sign" href="#Sign up">Sign-up</a>
        </div>
       
        </>
    );
}
export default Navbar;

