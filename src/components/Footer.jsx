import React from 'react';

function Footer() {
  return (
    <>


       <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>Recipe</span>Master</h3>
                            <p>Recipe Master is a web application designed to help users discover, organize, and share recipes. Whether you're a professional chef or a home cook, Recipe Master provides a user-friendly platform to find delicious recipes, save your favorite.</p>
                            <div className="footer-icons">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="<Contact/>">Services</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="" href="/">Portfol</a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="" href="/">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">feedback</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Quick Links</h5>
                            <p><i class="fa-solid fa-phone-volume"></i> +92 3121324083</p>
                            <p><i class="fa-solid fa-envelope"></i> recipemaster@gmail.com</p>
                            <p><i class="fa-solid fa-paper-plane"></i> Delhi,India.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>Design By Recipe-Master-Group</p>
            </div>
        

      {/* <div className="footer">
        <div className="txt">
          <h2>Main Branch</h2>
          <p>© 2024 Bundl Delhi <br />Technologies Pvt. Ltd</p>
        </div>
        <div className="txt">
          <h2>About Us</h2>
          <p>Product</p>
          <p>Service</p>
          <p>Customer</p>
          <p>Foods</p>
        </div>
        <div className="txt">
          <h2>We deliver to:</h2>
          <p>Bangalore</p>
          <p>Gurugram</p>
          <p>Delhi NCR</p>
          <p>Pune</p>
          <p>Hyderabad</p>
          <p>Haryana</p>
        </div>
        <div className="txt">
          <h2>Company</h2>
          <p>About</p>
          <p>Careers</p>
          <p>Team</p>
          <p>Terms & Conditions</p>
        </div>
      </div> */}
   </>
  );
}

export default Footer;
