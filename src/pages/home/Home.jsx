import React, { useState } from "react";
import styles from "./Home.module.css";
import Footer from "../../components/common/footer/Footer";
import Slider from "../../components/common/slider/Slider";
import Spinner from "../../components/common/spinner/Spinner";
import NewsCard from "../../components/specific/newsCard/NewsCard";

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=de&apiKey=${apiKey}`;

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <Slider />
      </div>
      <div>
        <h1>News</h1>
        <div className={styles.newsCard}>
          {loading && <Spinner />}
          {news?.map((item, index) => (
            <NewsCard
              key={index}
              {...item}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
