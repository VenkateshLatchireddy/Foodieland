import React, { useState, useEffect } from "react";
import "../styles/BannerCarousel.css";
import recipes from "../data/recipes";
// Import images
import SpaghettiCarbonara from "../assets/Spaghetti-Carbonara.jpg";
import MangoSmoothie from "../assets/Mango-Smoothie.jpg";
import MargheritaPizza from "../assets/Margherita-Pizza.jpg";
import ChocolateCake from "../assets/Chocolate-Cake.jpg";
import GrilledSalmon from "../assets/Grilled-Salmon.jpg";

const recipeImages = {
  "Spaghetti Carbonara": SpaghettiCarbonara,
  "Mango Smoothie": MangoSmoothie,
  "Margherita Pizza": MargheritaPizza,
  "Chocolate Cake": ChocolateCake,
  "Grilled Salmon": GrilledSalmon,
};

const BannerCarousel = () => {
  const featuredRecipes = recipes.filter((r) => r.featured).slice(0, 5);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredRecipes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [featuredRecipes.length]);

  return (
    <div className="banner-carousel">
      {featuredRecipes.map((recipe, index) => (
        <div
          key={index}
          className={`banner-slide ${index === currentIndex ? "active" : ""}`}
        >
          <div className="banner-image">
            <img src={recipeImages[recipe.name]} alt={recipe.name} />
            <div className="overlay"></div>
          </div>

          <div className="banner-content">
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
            <div className="banner-meta">
              <span>👨‍🍳 {recipe.chef}</span>
              <span>⭐ {recipe.avgRating} ({recipe.totalRatings})</span>
              <span>{recipe.mealType} • {recipe.dishType}</span>
            </div>
            <button className="banner-btn">View Recipe</button>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="dots">
        {featuredRecipes.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
