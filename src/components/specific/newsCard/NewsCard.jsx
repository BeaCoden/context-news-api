import React from "react";
import styles from "./NewsCard.module.css";

const NewsCard = ({ title, description, imageUrl, url }) => {
  return (
    <div className={styles.newsCard}>
      <img
        src={imageUrl}
        alt={title}
        className={styles.image}
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer">
        Read more ➡️
      </a>
    </div>
  );
};

export default NewsCard;
