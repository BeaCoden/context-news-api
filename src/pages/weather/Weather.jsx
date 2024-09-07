import React from "react";
import styles from "./Weather.module.css";
import OnBuild from "../../components/specific/onBuild/OnBuild";
import Footer from "../../components/common/footer/Footer";

const Weather = () => {
  return (
    <div className={styles.container}>
      <OnBuild />
      <Footer />
    </div>
  );
};

export default Weather;
