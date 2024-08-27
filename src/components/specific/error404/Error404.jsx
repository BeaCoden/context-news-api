import React from "react";
import { Link } from "react-router-dom";
import styles from "./Error404.module.css";

const Error404 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.errorContent}>
        <div className={styles.errorVisual}>
          <div className={styles.moon}></div>
          <div className={styles.astronaut}></div>
          <div className={styles.stars}></div>
        </div>
        <h4 className={styles.errorTitle}>404 - Lost in Space</h4>
        <p className={styles.errorMessage}>
          <br /> Oh nein! Du scheinst im Weltall gestrandet zu sein.
        </p>
        <p className={styles.errorMessage}>Keine Sorge, wir helfen dir, den Weg zurück zur Erde zu finden.</p>
        <Link
          to="/"
          className={styles.homeLink}>
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
};

export default Error404;
