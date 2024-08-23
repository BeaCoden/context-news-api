import React from "react";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.search}>
      <h2>Search</h2>
      <input
        type="text"
        placeholder="Search..."
      />
      <button>Search</button>
    </div>
  );
};

export default Search;
