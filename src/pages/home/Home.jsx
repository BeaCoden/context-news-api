import React, { useState } from "react";
import styles from "./Home.module.css";
import Footer from "../../components/common/footer/Footer";
import Slider from "../../components/common/slider/Slider";
import Spinner from "../../components/common/spinner/Spinner";

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=de&apiKey=${apiKey}`;

  return (
    <div className={styles.home}>
      <div>
        <Slider />
      </div>
      <div>
        <h1>News</h1>
        <div>{loading && <Spinner />}</div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
