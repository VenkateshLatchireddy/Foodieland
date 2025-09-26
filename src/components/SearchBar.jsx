import React from "react";
import "../styles/SearchBar.css";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Search by name, chef, or description..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="search-input"
    />
  );
}

export default SearchBar;
