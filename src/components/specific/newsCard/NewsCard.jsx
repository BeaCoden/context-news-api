import React from "react";
import styles from "./NewsCard.module.css";

const NewsCard = () => {
  return (
    <div className={styles.newsCard}>
      <h2>News Title</h2>
      <p>News content</p>
    </div>
  );
};

export default NewsCard;
