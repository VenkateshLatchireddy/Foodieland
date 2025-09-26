import React, { useState, useRef } from "react";
import "../styles/RecipeCard.css";


import SpaghettiCarbonara from "../assets/Spaghetti-Carbonara.jpg";
import MangoSmoothie from "../assets/Mango-Smoothie.jpg";
import MargheritaPizza from "../assets/Margherita-Pizza.jpg";
import ChickenCurry from "../assets/Chicken-Curry.jpg";
import ChocolateCake from "../assets/Chocolate-Cake.jpg";
import GrilledSalmon from "../assets/Grilled-Salmon.jpg";
import TomatoSoup from "../assets/Tomato-Soup.jpg";
import BeefSteak from "../assets/Beef-Steak.jpg";
import LemonChickenSoup from "../assets/Lemon-Chicken-Soup.jpg";
import BerryParfait from "../assets/Berry-Parfait.jpg";
import TandooriChicken from "../assets/Tandoori-Chicken.jpg";
import AvocadoToast from "../assets/Avocado-Toast.jpg";
import StrawberryCheesecake from "../assets/Strawberry-Cheesecake.jpg";
import VeganBuddhaBowl from "../assets/Vegan-Buddha-Bowl.jpg";
import GarlicButterShrimp from "../assets/Garlic-Butter-Shrimp.jpg";
import MushroomRisotto from "../assets/Mushroom-Risotto.jpg";
import FalafelWrap from "../assets/Falafel-Wrap.jpg";
import PeachIcedTea from "../assets/Peach-Iced-Tea.jpg";
import PumpkinSoup from "../assets/Pumpkin-Soup.jpg";
import CrispyChickenSandwich from "../assets/Crispy-Chicken-Sandwich.jpg";
import StuffedBellPeppers from "../assets/Stuffed-Bell-Peppers.jpg";

const RecipeCard = ({ recipe }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef(null);

  const recipeImages = {
    "Spaghetti Carbonara": SpaghettiCarbonara,
    "Mango Smoothie": MangoSmoothie,
    "Margherita Pizza": MargheritaPizza,
    "Chicken Curry": ChickenCurry,
    "Chocolate Cake": ChocolateCake,
    "Grilled Salmon": GrilledSalmon,
    "Tomato Soup": TomatoSoup,
    "Beef Steak": BeefSteak,
    "Lemon Chicken Soup": LemonChickenSoup,
    "Berry Parfait": BerryParfait,
    "Tandoori Chicken": TandooriChicken,
    "Avocado Toast": AvocadoToast,
    "Strawberry Cheesecake": StrawberryCheesecake,
    "Vegan Buddha Bowl": VeganBuddhaBowl,
    "Garlic Butter Shrimp": GarlicButterShrimp,
    "Mushroom Risotto": MushroomRisotto,
    "Falafel Wrap": FalafelWrap,
    "Peach Iced Tea": PeachIcedTea,
    "Pumpkin Soup": PumpkinSoup,
    "Crispy Chicken Sandwich": CrispyChickenSandwich,
    "Stuffed Bell Peppers": StuffedBellPeppers,
  };

  return (
    <div className="recipe-card" ref={cardRef}>
      <img
        src={recipeImages[recipe.name]}
        alt={recipe.name}
        loading="lazy"
        className={imageLoaded ? "lazy-loaded" : ""}
        onLoad={() => setImageLoaded(true)}
      />
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeCard;
