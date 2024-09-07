import React from "react";
import styles from "./NewsCard.module.css";
import noImage from "../../../assets/img/noImage.jpg";

const NewsCard = ({ title, description, urlToImage, url }) => {
  return (
    <div className={styles.newsCard}>
      <div>
        <img
          className={styles.image}
          src={urlToImage ? urlToImage : noImage}
          alt="news"
        />
      </div>
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
