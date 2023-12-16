import React, { useState } from "react";
import "../index.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchTerm, handleSearch }) => {
  const [text, setText] = useState("");

  function changeHandler(e) {
    setText(e.target.value);
  }

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={(e) => changeHandler(e)}
      />
      <FaSearch
        onClick={() => {
          handleSearch(text);
        }}
        className="search-btn"
      />
    </div>
  );
};

export default SearchBar;
