import React, { useEffect, useState } from 'react'


const recipes={
  recipes:[],
}
const FetchDisplayAPI = () => {
  const [recipes, setrecipes] = useState();

  useEffect(() => {
    async function getRecipes() {
      try {
        const data = await fetch('https://dummyjson.com/recipes');
        const recipesObj = await data.json();
        setcarts(recipesObj.recipes);

      } catch ( error) {
        console.log(error);
      }
    }
    getRecipes();

  }, []);
  
  console.log(recipes);



  return (
   <>
   <h1>Recipes</h1>
   <ul>
    {carts.map((recipesObj)=> {
      return <li>{recipesObj.name}</li>
    })}
   </ul>
   </>
  )
}

export default FetchDisplayAPI
