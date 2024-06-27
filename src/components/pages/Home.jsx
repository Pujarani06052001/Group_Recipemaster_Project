import React from 'react';
// import Footer from './components/Footer';
// import './Home.css';

import { Link } from 'react-router-dom';

const Home = () => {


  
    const handleOrderNowClick = () => {
      // alert("first login")
    };
 

  return (
    <>
      
      <div className="relative">
        {/* Hero Section */}
        <div className="hero-section bg-cover bg-center h-[600px] flex items-center justify-center relative" style={{ backgroundImage: 'url(/images/41.avif)' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
          <div className="text-center text-white relative z-10">
          <h1 className="text-5xl font-bold mb-4">RecipeMaster</h1>

            {/* <h1 className="text-5xl font-bold mb-4">Find the Best Restaurants in Your City</h1> */}
            <p className="text-3xl mb-4 ">Discover the best food & drinks in Delhi</p>
            {/* <div className="mt-4">
              <input type="text" className="p-2 rounded-l-lg" placeholder="Search for restaurants, cuisines..." />
              <button type="button"  className="bg-green-500 text-white py-2 px-4 rounded-r-lg hover:bg-green-600">Search</button>
            </div> */}
            <Link to="/dashboard">
            <button 
                type="button" 
                className="bg-green-500 text-white py-2 px-4  hover:bg-green-600" 
                onClick={handleOrderNowClick}
              >
                Search
              </button>
            </Link>
           
          </div>
        </div>

        {/* Categories Section */}
        <div className="container mx-auto mt-8">
          <h2 className="text-3xl font-bold text-center mb-6">Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="p-4">
            <a href="https://www.foodnetwork.com/recipes/photos/italian-dinners"><img src="/images/51.webp" alt="Category 1" className="mx-auto mb-4 rounded-lg shadow-lg hover:scale-105" />
</a>
              <h3 className="text-2xl font-semibold mb-2">Italian</h3>
            </div>
            
            <div className="p-4">
            <a href='https://www.foodnetwork.com/recipes/photos/best-chinese-recipes'><img src="/images/26.jpeg" alt="Category 2" className="mx-auto mb-4 rounded-lg shadow-lg hover:scale-105" />
            </a>
              <h3 className="text-2xl font-semibold mb-2">Chinese</h3>
            </div>
            
            <div className="p-4">
            <a href='https://www.foodnetwork.com/recipes/packages/global-flavors/weeknights/top-mexican-food-recipes'><img src="/images/52.jpg" alt="Category 3" className="mx-auto mb-4 rounded-lg shadow-lg hover:scale-105" />
            </a>
              <h3 className="text-2xl font-semibold mb-2">Mexican</h3>
            </div>
          </div>
        </div>

        {/* Popular Dishes Section */}
        <div className="container mx-auto mt-12">
          <h2 className="text-3xl font-bold text-center mb-6">Popular Dishes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="p-4">
            <a href='https://www.recipetineats.com/carbonara/'><img src="/images/23.jpg" alt="Dish 1" className="mx-auto mb-4 rounded-lg shadow-lg hover:scale-105" />
</a>
              <h3 className="text-2xl font-semibold mb-2">Spaghetti Carbonara</h3>
            </div>
            <div className="p-4">
            <a href='https://www.recipetineats.com/sweet-and-sour-pork/'><img src="/images/24.jpg" alt="Dish 2" className="mx-auto mb-4 rounded-lg shadow-lg hover:scale-105" />
</a>
              <h3 className="text-2xl font-semibold mb-2">Sweet and Sour Pork</h3>
            </div>
            <div className="p-4">
            <a href='https://www.recipetineats.com/mexican-pulled-pork-tacos-carnitas-good-food-wine-show-fun-bloopers/'><img src="/images/22.webp" alt="Dish 3" className="mx-auto mb-4 rounded-lg shadow-lg hover:scale-105" />
</a>
              <h3 className="text-2xl font-semibold mb-2">Tacos al Pastor</h3>
            </div>
          </div>
        </div>

         {/* Why Choose Us Section  */}
         <div className="container mx-auto mt-12  py-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <img src="/images/53.jpg" alt="Quality Food" className="mx-auto mb-4 rounded-lg shadow-lg  hover:scale-105" />
              <h3 className="text-2xl font-semibold mb-2">Quality Food</h3>
              <p>We use the freshest ingredients to prepare delicious meals that meet the highest standards.</p>
            </div>
            <div className="p-4">
              <img src="/images/54.jpg" alt="Convenience" className="mx-auto mb-4 rounded-lg shadow-lg  hover:scale-105" />
              <h3 className="text-2xl font-semibold mb-2">Convenience</h3>
              <p>Enjoy gourmet meals delivered straight to your doorstep, ready to eat in minutes.</p>
            </div>
            <div className="p-4">
              <img src="/images/56.jpg" alt="Variety" className="mx-auto mb-4 rounded-lg shadow-lg  hover:scale-105" />
              <h3 className="text-2xl font-semibold mb-2">Variety</h3>
              <p>Choose from a wide range of cuisines and meal options that cater to all tastes and dietary needs.</p>
            </div>
          </div>
        </div> 
       
        {/* Testimonials Section */}
        <div className="container mx-auto mt-12 bg-gray-100 py-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-6">Customer Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <img src="/images/57.jpg" alt="Customer 1" className="mx-auto mb-4 rounded-full w-24 h-24 object-cover" />
              <p className="italic">"RecipeMaster has transformed my meal planning. The food is delicious and healthy, and the convenience is unmatched!"</p>
              <p className="mt-2 font-semibold">- Sarah M.</p>
            </div>
            <div className="p-4">
              <img src="/images/58.webp" alt="Customer 2" className="mx-auto mb-4 rounded-full w-24 h-24 object-cover" />
              <p className="italic">"I love the variety and quality of the meals. RecipeMaster makes it so easy to eat well even with a busy schedule."</p>
              <p className="mt-2 font-semibold">- James L.</p>
            </div>
            <div className="p-4">
              <img src="/images/59.webp" alt="Customer 3" className="mx-auto mb-4 rounded-full w-24 h-24 object-cover" />
              <p className="italic">"The meal plans are fantastic. Healthy and tasty options for every day!"</p>
              <p className="mt-2 font-semibold">- Emily R.</p>
            </div>
            <div className="p-4">
              <img src="/images/60.webp" alt="Customer 4" className="mx-auto mb-4 rounded-full w-24 h-24 object-cover" />
              <p className="italic">"Great service and delicious meals. Highly recommend RecipeMaster!"</p>
              <p className="mt-2 font-semibold">- Michael T.</p>
            </div>
          </div>
        </div>

    
      </div>
    </>
  );
};

export default Home