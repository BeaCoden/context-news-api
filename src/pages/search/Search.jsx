import React, { useState, useEffect } from "react";
import styles from "./Search.module.css";
import { useLocation } from "react-router-dom";
import NewsCard from "../../components/specific/newsCard/NewsCard";
import useFetchNews from "../../hooks/useFetchNews";
import Spinner from "../../components/common/spinner/Spinner";

const Search = () => {
  const { state } = useLocation();
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false); // Additional state to control content visibility

  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?q=${state}&apiKey=${apiKey}`;

  const { news, error } = useFetchNews(url);

  useEffect(() => {
    // Start loading the data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Delay for 3 seconds before showing content

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Show content after data is fetched and loading delay is over
    if (!loading && (news.length || error)) {
      setShowContent(true);
    }
  }, [loading, news, error]);

  return (
    <div className={styles.search}>
      <p>
        <em>Showing news for:</em>
      </p>
      <h1>{state || "All News"}</h1>

      {loading ? (
        <div className={styles.loading}>
          <Spinner />
        </div>
      ) : showContent && error ? (
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
      ) : showContent && !news.length ? (
        <div className={styles.loading}>
          <p>No news articles found...</p>
        </div>
      ) : (
        showContent && (
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
        )
      )}
    </div>
  );
};

export default Search;
