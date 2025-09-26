import React from "react";
import RecipeCard from "./RecipeCard";
import "../styles/RecipeList.css";

function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
