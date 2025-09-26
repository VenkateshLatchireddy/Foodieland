import React, { useState, useEffect } from "react";
import "../styles/TastyCard.css"

const quotes = [
  {
    heading: "Delicious Moments",
    paragraph: "“People who love to eat are always the best people.” – Julia Child",
  },
  {
    heading: "Taste the Love",
    paragraph: "“Cooking is like love. It should be entered into with abandon or not at all.” – Harriet Van Horne",
  },
  {
    heading: "Savor the Flavor",
    paragraph: "“One cannot think well, love well, sleep well, if one has not dined well.” – Virginia Woolf",
  },
  {
    heading: "Foodie Vibes",
    paragraph: "“Good food is the foundation of genuine happiness.” – Auguste Escoffier",
  },
];

const FoodQuoteCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fqc-carousel-container">
      {quotes.map((quote, idx) => (
        <div
          key={idx}
          className={`fqc-carousel-card ${
            idx === currentIndex ? "active" : "inactive"
          }`}
        >
          <h2 className="fqc-carousel-heading">{quote.heading}</h2>
          <p className="fqc-carousel-paragraph">{quote.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default FoodQuoteCarousel;
