import React from "react";
import "../styles/SortOptions.css";

function SortOptions({ sortOption, setSortOption }) {
  return (
    <>
    <h1>Sort</h1>
    <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
      <option value="default">Show All Recipes</option>
      <option value="newest">Newest</option>
      <option value="oldest">Oldest</option>
      <option value="highestRating">Highest Rating</option>
      <option value="lowestRating">Lowest Rating</option>
    </select>
    </>
  );
}

export default SortOptions;
