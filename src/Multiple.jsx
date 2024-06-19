
// function Multiple() {
//     return(
//         <>
//         <h1 className="index">Multiple Recipe....</h1>
//         <div className="a">
//                 <a href="A">A</a>
//                 <span> / </span>
//                 <a href="B">B</a>
//                 <span> / </span>
//                 <a href="https://www.themealdb.com/api/json/v1/1/search.php?f=b">C</a>
//                 <span> / </span>
//                 <a href="">D</a>
//                 <span> / </span>
//                 <a href="">E</a>
//                 <span> / </span>
//                 <a href="">F</a>
//                 <span> / </span>
//                 <a href="">G</a>
//                 <span> / </span>
//                 <a href="">H</a>
//                 <span> / </span>
//                 <a href="">I</a>
//                 <span> / </span>
//                 <a href="">J</a>
//                 <span> / </span>
//                 <a href="">K</a>
//                 <span> / </span>
//                 <a href="">L</a>
//                 <span> / </span>
//                 <a href="">M</a>
//                 <span> / </span>
//                 <a href="">N</a>
//                 <span> / </span>
//                 <a href="">O</a>
//                 <span> / </span>
//                 <a href="">P</a>
//                 <span> / </span>
//                 <a href="">Q</a>
//                 <span> / </span>
//                 <a href="">R</a>
//                 <span> / </span>
//                 <a href="">S</a>
//                 <span> / </span>
//                 <a href="">T</a>
//                 <span> / </span>
//                 <a href="">U</a>
//                 <span> / </span>
//                 <a href="">V</a>
//                 <span> / </span>
//                 <a href="">X</a>
//                 <span> / </span>
//                 <a href="">Y</a>
//                 <span> / </span>
//                 <a href="">Z</a>



//         </div>
//         </>
//     )
 
  
// }

// export default Multiple;


// function Multiple() {
//     return(
//         <>
//         <h1 className="index">Multiple Recipe....</h1>
//         <div className="a">
//                 <a href="https://www.themealdb.com/api/json/v1/1/search.php?f=a">A</a>
//                 <span> / </span>
//                 <a href="https://www.themealdb.com/api/json/v1/1/search.php?f=b">B</a>
//                 <span> / </span>
//                 <a href="https://www.themealdb.com/api/json/v1/1/search.php?f=c">C</a>
//                 <span> / </span>
//                 <a href="https://www.themealdb.com/api/json/v1/1/search.php?f=d">D</a>
//                 <span> / </span>
//                 <a href="https://www.themealdb.com/api/json/v1/1/search.php?f=e">E</a>
//                 <span> / </span>
//                 <a href="https://www.themealdb.com/api/json/v1/1/search.php?f=f">F</a>
//                 <span> / </span>
//                 <a href="https://www.themealdb.com/api/json/v1/1/search.php?f=g">G</a>
//                 <span> / </span>
//                 <a href="https://www.themealdb.com/api/json/v1/1/search.php?f=h">H</a>
//                 <span> / </span>
//                 <a href="https://www.themealdb.com/api/json/v1/1/search.php?f=i">I</a>
//                 <span> / </span>
//                 <a href="https://www.themealdb.com/api/json/v1/1/search.php?f=j">J</a>
//                 <span> / </span>
//                 <a href="https://www.themealdb.com/api/json/v1/1/search.php?f=k">K</a>
//                 <span> / </span>
//                 <a href="https://www.themealdb.com/api/json/v1/1/search.php?f=l">L</a>
//                 <span> / </span>
//                 <a href="https://www.themealdb.com/api/json/v1/1/search.php?f=m">M</a>
//                 <span> / </span>
//                 <a href="https://www.themealdb.com/api/json/v1/1/search.php?f=n">N</a>
//                 <span> / </span>
//                 <a href="https://www.themealdb.com/api/json/v1/1/search.php?f=o">O</a>
//                 <span> / </span>
//                 <a href="https://www.themealdb.com/api/json/v1/1/search.php?f=p">P</a>
//                 <span> / </span>
//                 <a href="https://www.themealdb.com/api/json/v1/1/search.php?f=q">Q</a>
//                 <span> / </span>
//                 <a href="https://www.themealdb.com/api/json/v1/1/search.php?f=r">R</a>
//                 <span> / </span>
//                 <a href="https://www.themealdb.com/api/json/v1/1/search.php?f=s">S</a>
//                 <span> / </span>
//                 <a href="https://www.themealdb.com/api/json/v1/1/search.php?f=t">T</a>
//                 <span> / </span>
//                 <a href="https://www.themealdb.com/api/json/v1/1/search.php?f=u">U</a>
//                 <span> / </span>
//                 <a href="https://www.themealdb.com/api/json/v1/1/search.php?f=v">V</a>
//                 <span> / </span>
//                 <a href="https://www.themealdb.com/api/json/v1/1/search.php?f=x">X</a>
//                 <span> / </span>
//                 <a href="https://www.themealdb.com/api/json/v1/1/search.php?f=y">Y</a>
//                 <span> / </span>
//                 <a href="https://www.themealdb.com/api/json/v1/1/search.php?f=z">Z</a>



//         </div>
//         </>
//     )
 
  
// }

// export default Multiple;

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
          <React.Fragment key={letter}>
            <a href="#" onClick={() => fetchRecipes(letter.toUpperCase())}>{letter.toUpperCase()}</a>
            <span> / </span>
          </React.Fragment>
        ))}
      </div>
      <div className="recipes">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.idMeal} className="recipe">
              <h2>{recipe.strMeal}</h2>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <h2>{recipe.strMeal}</h2>

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

