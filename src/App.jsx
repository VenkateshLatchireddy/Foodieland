import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import RecipeList from "./components/RecipeList";
import recipesData from "./data/recipes";
import Navbar from "./components/Navbar";
import BannerCarousel from "./components/BannerCarousel";
import "./App.css";
import TastyCard from "./components/TastyCard";
import CheffBannerCard from "./components/CheffBannerCard";

function App() {
  const [recipes, setRecipes] = useState(recipesData); 
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({});
  const [sortOption, setSortOption] = useState("default");


  const sortRecipes = (option, recipesList) => {
    let sortedRecipes;
    switch (option) {
      case "newest":
        sortedRecipes = [...recipesList].sort((a, b) => new Date(b.uploadedOn) - new Date(a.uploadedOn));
        break;
      case "oldest":
        sortedRecipes = [...recipesList].sort((a, b) => new Date(a.uploadedOn) - new Date(b.uploadedOn));
        break;
      case "highestRating":
        sortedRecipes = [...recipesList].sort((a, b) => b.avgRating - a.avgRating);
        break;
      case "lowestRating":
        sortedRecipes = [...recipesList].sort((a, b) => a.avgRating - b.avgRating);
        break;
      default:
        sortedRecipes = recipesData; 
        break;
    }
    setRecipes(sortedRecipes);
  };

  useEffect(() => {
    sortRecipes(sortOption, recipesData);
  }, [sortOption]);

  const filteredRecipes = recipes.filter((recipe) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      recipe.name.toLowerCase().includes(query) ||
      recipe.chef.toLowerCase().includes(query) ||
      recipe.description.toLowerCase().includes(query);
  
    const matchesAttributes =
      !filters.attributes ||
      (filters.attributes === "Contest Winner" && recipe.contestWinner) ||
      (filters.attributes === "Featured" && recipe.featured) ||
      (filters.attributes === "Test Kitchen-Approved" && recipe.testKitchenApproved);
  

    const matchesMealType = !filters.mealType || recipe.mealType === filters.mealType;
  
 
    const matchesDishType = !filters.dishType || recipe.dishType === filters.dishType;
  
    return matchesSearch && matchesAttributes && matchesMealType && matchesDishType;
  });

  const handleClearAll = () => {
    setFilters({});
    setSortOption("default");
    setRecipes(recipesData); 
  };

  return (
    <div className="container">
      <Navbar/> 
      <BannerCarousel />
    
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <TastyCard />
   
      <Filters
        filters={filters}
        setFilters={setFilters}
        sortOption={sortOption}
        setSortOption={setSortOption} 
        handleClearAll={handleClearAll}
      />
      <TastyCard />
      <RecipeList recipes={filteredRecipes} />
      <CheffBannerCard />
    </div>
  );
}

export default App;
