import React from "react";
import "../styles/CheffBannerCard.css";
import Cheff from "../assets/Cheff.jpg";
// Pass your chef image as a prop or import it
const ChefBannerCard = ({ chefImage }) => {
  return (
    <div className="cbc-container">
      {/* Left Side */}
      <div className="cbc-left">
        <h1 className="cbc-heading">Everyone can be a chef in their own kitchen</h1>
        <p className="cbc-paragraph">
          "Cooking is not just about ingredients, recipes, and cooking. It's about harnessing imagination, empowerment, and love."
        </p>
        <button className="cbc-button">Learn More</button>
      </div>

      {/* Right Side */}
      <div className="cbc-right">
        <img src={Cheff} alt="Chef" className="cbc-chef-image" />
      </div>
    </div>
  );
};

export default ChefBannerCard;
