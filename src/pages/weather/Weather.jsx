import React from "react";
import styles from "./Weather.module.css";
import Footer from "../../components/common/footer/Footer";

const Weather = () => {
  return (
    <div className={styles.container}>
      <div className={styles.errorContent}>
        <img
          src="https://via.placeholder.com/150"
          alt="Weather illustration"
          className={styles.errorImage}
        />
        <h4 className={styles.errorTitle}>Seite im Aufbau</h4>
        <p className={styles.errorMessage}>Die Wetter-Seite ist momentan noch in Entwicklung.</p>
        <p className={styles.errorMessage}>
          Bitte schau bald wieder vorbei, um aktuelle Wetterinformationen zu erhalten!
        </p>
        <a
          href="/"
          className={styles.homeLink}>
          Zurück zur Startseite
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Weather;
