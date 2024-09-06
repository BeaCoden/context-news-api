import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Home.module.css";
import Footer from "../../components/common/footer/Footer";
import Slider from "../../components/common/slider/Slider";
import Spinner from "../../components/common/spinner/Spinner";
import NewsCard from "../../components/specific/newsCard/NewsCard";
import useFetchNews from "../../hooks/useFetchNews";

const Home = () => {
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const prevQuery = useRef(state);

  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

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
    <div className={styles.container}>
      <div className={styles.slider}>
        <Slider />
      </div>
      <div>
        <h1>News</h1>
        <div className={styles.newsCard}>
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
      </div>
      <Footer />
    </div>
  );
};

export default Home;
