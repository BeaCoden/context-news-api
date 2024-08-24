import React from "react";
import styles from "./Home.module.css";
import Footer from "../../components/common/footer/Footer";

const Home = () => {
  return (
    <div className={styles.home}>
      <h2>Home</h2>
      <Footer />
    </div>
  );
};

export default Home;
