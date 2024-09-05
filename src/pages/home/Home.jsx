import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Home.module.css";
import Footer from "../../components/common/footer/Footer";
import Slider from "../../components/common/slider/Slider";
import Spinner from "../../components/common/spinner/Spinner";
import NewsCard from "../../components/specific/newsCard/NewsCard";

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  const fetchNews = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      setNews(data.articles);
    } catch (error) {
      console.error("Failed to fetch news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <Slider />
      </div>
      <div>
        <h1>News</h1>
        <div className={styles.newsCard}>
          {loading && <Spinner />}
          {news?.map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              description={article.description}
              imageUrl={article.urlToImage}
              url={article.url}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
