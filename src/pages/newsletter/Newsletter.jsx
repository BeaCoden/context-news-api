import React from "react";
import styles from "./Newsletter.module.css";
import Footer from "../../components/common/footer/Footer";

const Newsletter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.errorContent}>
        <img
          src="https://via.placeholder.com/150"
          alt="404 illustration"
          className={styles.errorImage}
        />
        <h4 className={styles.errorTitle}>404 - Seite nicht gefunden</h4>
        <p className={styles.errorMessage}>Oops! Die Newsletter-Seite ist noch nicht fertig.</p>
        <p className={styles.errorMessage}>Aber keine Sorge, wir arbeiten daran. Schau bald wieder vorbei!</p>
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

export default Newsletter;
