import React from "react";
import styles from "./Search.module.css";
import { useLocation } from "react-router-dom";

const Search = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className={styles.search}>
      <h1>
        News about:
        <span>{}</span>
      </h1>
      <div></div>
    </div>
  );
};

export default Search;
