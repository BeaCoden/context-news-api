import React from "react";
import styles from "./Categories.module.css";

const Categories = () => {
  return (
    <div className={styles.categories}>
      <h2>Categories</h2>
      <ul>
        <li>Category 1</li>
        <li>Category 2</li>
        <li>Category 3</li>
      </ul>
    </div>
  );
};

export default Categories;
