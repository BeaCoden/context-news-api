import React from "react";
import styles from "./Search.module.css";
import { useLocation } from "react-router-dom";
import NewsCard from "../../components/specific/newsCard/NewsCard";
import useFetchNews from "../../hooks/useFetchNews";

const Search = () => {
  const { state } = useLocation();

  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?q=${state}&apiKey=${apiKey}`;

  const { news, error } = useFetchNews(url);

  return (
    <div className={styles.search}>
      <p>
        <em>Showing news for:</em>
      </p>
      <h1>{state || "All News"}</h1>

      {error ? (
        <div className={styles.error}>
          <p>
            We couldn't find any articles <br /> matching your search.
          </p>
          <div className={styles.buttonContainer}>
            <a
              className={styles.button}
              href="/categories">
              search in categories
            </a>
            <button
              className={styles.button}
              onClick={() => (window.location.href = "/")}>
              back Home
            </button>
          </div>
        </div>
      ) : !news.length ? (
        <div className={styles.loading}>
          <p>Loading news articles...</p>
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
