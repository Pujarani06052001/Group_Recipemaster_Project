
import React from 'react';
import '../style.css';

const burgers = [
  {
    imgSrc: 'image/Burger.avif',
    title: 'Burger',
    link: 'https://hebbarskitchen.com/veggie-burger-recipe-vegetarian-burger/#google_vignette',
  },
  {
    imgSrc: 'image/Gol.avif',
    title: 'GolGappe',
    link: 'https://hebbarskitchen.com/puri-recipe-pani-puri-gol-gappe-puri/',
  },
  {
    imgSrc: 'image/sandwich.avif',
    title: 'Cheese Sandwich',
    link: 'https://www.vegrecipesofindia.com/grilled-cheese-sandwich-recipe/',
  },
  {
    imgSrc: 'image/Chappa.avif',
    title: 'Chappati Rolls',
    link: 'https://www.indianhealthyrecipes.com/veg-kathi-roll-recipe-veg-frankie/',
  },
  {
    imgSrc: 'image/Noodle.avif',
    title: 'Noodles',
    link: 'https://www.indianhealthyrecipes.com/veg-noodles-recipe/',
  },
  {
    imgSrc: 'image/Daal.avif',
    title: 'Daal Cahwal',
    link: 'https://sindhirasoi.com/2008/02/daalchaawal/',
  },
  {
    imgSrc: 'image/Paratha.avif',
    title: 'Paratha',
         price: 'Rs.200',
    link: 'https://www.vegrecipesofindia.com/paratha-recipe-plain-paratha-recipe/',
  },
  {
    imgSrc: 'image/Baby_corn.avif',
    title: 'Baby Corn',
    price: 'Rs.200',
    link: 'https://www.indianhealthyrecipes.com/baby-corn-fry/',
  },
  {
    imgSrc: 'image/Paav_baji.avif',
    title: 'Paav Bhaji',
         price: 'Rs.200',
    link: 'https://www.indianhealthyrecipes.com/masala-pav-recipe/',
  }
];

const BurgerCard = ({ imgSrc, title, description, price, link }) => (
  <div className="card">
    <img className="photo" src={imgSrc} alt={title} />
    <h4>{title}</h4>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button>Click to see Recipe</button>
    </a>
  </div>
);

const App = () => (
  <div className="container">
    {burgers.map((burger, index) => (
      <BurgerCard key={index} {...burger} />
    ))}
  </div>
);

export default App;
