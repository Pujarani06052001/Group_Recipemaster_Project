import React, { useState } from 'react';

function Multiple() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (letter) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
    const data = await response.json();
    setRecipes(data.meals || []);
  };

  return (
    <>
      <h1 className="index">Multiple Recipe....</h1>
      <div className="letters">
        {'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => (
          <span key={letter}>
            <a href="#" onClick={() => fetchRecipes(letter.toUpperCase())}>{letter.toUpperCase()}</a>
            <span> / </span>
          </span>
        ))}
      </div>
      <div className="recipes">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.idMeal} className="recipe">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <h2 className='name'>{recipe.strMeal}</h2>

            </div>
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </div>
    </>
  );
}

export default Multiple;


