import React, { useState, useEffect, useRef } from "react";
import styles from "./Search.module.css";
import { useLocation } from "react-router-dom";
import NewsCard from "../../components/specific/newsCard/NewsCard";
import useFetchNews from "../../hooks/useFetchNews";
import Spinner from "../../components/common/spinner/Spinner";

const Search = () => {
  const { state } = useLocation();
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const prevQuery = useRef(state);

  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?q=${state}&apiKey=${apiKey}`;

  const { news, error } = useFetchNews(url);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading && (news.length || error)) {
      setShowContent(true);
      console.log("search news data:", news);
    }
  }, [loading, news, error]);

  useEffect(() => {
    if (state !== prevQuery.current) {
      setLoading(true);
      setShowContent(false);
      prevQuery.current = state;
    }
  }, [state]);

  return (
    <div className={styles.search}>
      <p>
        <em>Showing news for:</em>
      </p>
      <h1>{state || "All News"}</h1>

      <div>
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
                  urlToImage={article.urlToImage}
                  url={article.url}
                />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Search;
