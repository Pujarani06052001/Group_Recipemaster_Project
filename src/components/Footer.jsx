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
        

     
// import '../Footer.css';

// const Footer = () => (
//   <footer className="footer bg-gray-900 text-white py-8">
//     <div className="container mx-auto px-4">
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* About Us */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">About RecipeMaster</h3>
//           <p>RecipeMaster delivers fresh and healthy meal plans directly to your door, making it easy to enjoy delicious meals without the hassle of cooking.</p>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
//           <p>Email: support@recipemaster.com</p>
//           <p>Phone: (123) 456-7890</p>
//           <p>Address: 123 RecipeMaster St, Miami, FL 33101</p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//           <ul>
//             <li><a href="/about" className="hover:underline">About Us</a></li>
//             <li><a href="/plans" className="hover:underline">Meal Plans</a></li>
//             <li><a href="/faq" className="hover:underline">FAQ</a></li>
//             <li><a href="/contact" className="hover:underline">Contact</a></li>
//           </ul>
//         </div>

//         {/* Social Media */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
//           <div className="flex space-x-4">
//             <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//               <img src="/images/facebook-icon.png" alt="Facebook" className="h-6 w-6" />
//             </a>
//             <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//               <img src="/images/twitter-icon.png" alt="Twitter" className="h-6 w-6" />
//             </a>
//             <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//               <img src="/images/instagram-icon.png" alt="Instagram" className="h-6 w-6" />
//             </a>
//             <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//               <img src="/images/linkedin-icon.png" alt="LinkedIn" className="h-6 w-6" />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="mt-8 border-t border-gray-700 pt-4 text-center">
//         <p>&copy; {new Date().getFullYear()} RecipeMaster. All rights reserved.</p>
//       </div>
//     </div>
//   </footer>
// );


export default Footer;
