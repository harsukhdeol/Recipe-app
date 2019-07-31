import React, { useEffect, useState } from 'react';
import Recipe from './Recipe.js';
import './App.css';

function App() {
  const APP_ID = 'de761df8';
  const APP_KEY = '09b47eecfbb702a45396bb72be683219';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(``)
  const [query, setQuery] = useState("chicken")
  const request =
    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, [query])
  const getRecipes = async () => {
    const response = await fetch(request);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  }
  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch("");
  }
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <button type="submit" className="search-button">
          Search</button>
      </form>
      {recipes.map(recipe => (
        <div>
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            img={recipe.recipe.image}
            cals={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients} />
        </div>
      ))}

    </div>
  );
}

export default App;
