import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";
import { useLocation } from "react-router-dom";

const Search = () => {
  const [news, setNews] = useState([]);
  const { state } = useLocation();

  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?q=${state}&apiKey=${apiKey}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setNews(data.articles)); // Updated to directly set articles
  }, [url]);

  console.log(news);

  return (
    <div className={styles.search}>
      <p>
        <em>Showing news for:</em>
      </p>
      <h1>{state}</h1>
      <div className={styles.newsGrid}>
        {news.map((article, index) => (
          <div
            key={index}
            className={styles.newsItem}>
            <h2>
              <em>{article.title}</em>
            </h2>
            <img
              src={article.urlToImage}
              alt={article.title}
            />
            <p>{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer">
              Read more ➡️
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
