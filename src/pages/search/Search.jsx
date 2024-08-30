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
      <h1>{state}</h1>

      {error ? (
        <div className={styles.error}>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
      ) : !news.length ? (
        <div className={styles.loading}>
          <p>Loading...</p>
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
