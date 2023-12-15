import React, { useState } from "react";

const SearchBar = ({ searchTerm, handleSearch }) => {
  //   const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        className="search-bar"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
