import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";
import { useLocation } from "react-router-dom";
import NewsCard from "../../components/specific/newsCard/NewsCard";

const Search = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const { state } = useLocation();

  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?q=${state}&apiKey=${apiKey}`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.articles.length === 0) {
          setError("No messages found. Please check your input.");
        } else {
          setNews(data.articles);
          setError(null);
        }
      })
      .catch((error) => {
        setError("An error has occurred. Please try again later.");
        console.error(error);
      });
  }, [url]);

  return (
    <div className={styles.search}>
      <p>
        <em>Showing news for:</em>
      </p>
      <h1>{state}</h1>

      {error ? (
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      ) : (
        <div className={styles.newsGrid}>
          {news.map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              description={article.description}
              imageUrl={article.urlToImage}
              url={article.url}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
