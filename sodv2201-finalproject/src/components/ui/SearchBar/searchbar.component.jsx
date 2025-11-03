import React, { useState } from "react";
import "./searchBar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const handleSearch = () => {
    onSearch(query, filter);
  };

  return (
    <div className="searchbar-container">
      <input
        type="text"
        className="searchbar-input"
        placeholder="Search for a course..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <select
        className="searchbar-filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="beginner">Beginner</option>
        <option value="advanced">Advanced</option>
        <option value="web">Web Development</option>
        <option value="database">Database</option>
      </select>

      <button className="searchbar-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
