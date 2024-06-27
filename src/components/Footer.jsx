// import React from 'react';

// function Footer() {
//   return (
//     <>


//        <div className="Footer">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-6 col-lg-5 col-12 ft-1">
//                             <h3><span>Recipe</span>Master</h3>
//                             <p>Recipe Master is a web application designed to help users discover, organize, and share recipes. Whether you're a professional chef or a home cook, Recipe Master provides a user-friendly platform to find delicious recipes, save your favorite.</p>
//                             <div className="footer-icons">
//                                 <i class="fa-brands fa-facebook"></i>
//                                 <i class="fa-brands fa-twitter"></i>
//                                 <i class="fa-brands fa-instagram"></i>
//                                 <i class="fa-brands fa-linkedin-in"></i>
//                             </div>
//                         </div>
//                         <div className="col-md-6 col-lg-3 col-12 ft-2">
//                             <h5>Quick Links</h5>
//                             <ul>
//                                 <li className="nav-item">
//                                     <a className="" href="<Contact/>">Services</a>
//                                 </li>
//                                 {/* <li className="nav-item">
//                                     <a className="" href="/">Portfol</a>
//                                 </li> */}
//                                 <li className="nav-item">
//                                     <a className="" href="/">Contact Us</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="" href="/">Services</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="" href="/">feedback</a>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="col-md-6 col-lg-4 col-12 ft-3">
//                             <h5>Quick Links</h5>
//                             <p><i class="fa-solid fa-phone-volume"></i> +92 3121324083</p>
//                             <p><i class="fa-solid fa-envelope"></i> recipemaster@gmail.com</p>
//                             <p><i class="fa-solid fa-paper-plane"></i> Delhi,India.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='Last-footer'>
//                 <p>Design By Recipe-Master-Group</p>
//             </div>
        

//      </>
//   )
// }
// export default Footer;

import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-2/5 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-yellow-500">Recipe</span>Master
            </h3>
            <p className="mb-4">
              Recipe Master is a web application designed to help users discover, organize, and share recipes. Whether you're a professional chef or a home cook, Recipe Master provides a user-friendly platform to find delicious recipes and save your favorites.
            </p>
            <div className="flex space-x-4">
              <i className="fab fa-facebook fa-lg"></i>
              <i className="fab fa-twitter fa-lg"></i>
              <i className="fab fa-instagram fa-lg"></i>
              <i className="fab fa-linkedin-in fa-lg"></i>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/5 mb-6 md:mb-0">
            <h5 className="text-xl font-bold mb-4">Quick Links</h5>
            <ul>
              <li className="mb-2">
                <a className="hover:underline" href="/services">Services</a>
              </li>
              <li className="mb-2">
                <a className="hover:underline" href="/contact">Contact Us</a>
              </li>
              <li className="mb-2">
                <a className="hover:underline" href="/feedback">Feedback</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-2/5">
            <h5 className="text-xl font-bold mb-4">Contact Us</h5>
            <p className="mb-2"><i className="fas fa-phone-volume mr-2"></i> +92 3121324083</p>
            <p className="mb-2"><i className="fas fa-envelope mr-2"></i> recipemaster@gmail.com</p>
            <p className="mb-2"><i className="fas fa-paper-plane mr-2"></i> Delhi, India.</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-center py-4 mt-6">
        <p>Design By Recipe-Master-Group</p>
      </div>
    </footer>
  );
}

export default Footer;
