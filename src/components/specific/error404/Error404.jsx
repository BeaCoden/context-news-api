import React from "react";
import { Link } from "react-router-dom";
import styles from "./Error404.module.css";

const Error404 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.errorContent}>
        <div className={styles.errorVisual}>
          <div className={styles.fourLeft}>4</div>
          <div className={styles.moon}></div>
          <div className={styles.fourRight}>4</div>
          <div className={`${styles.emoji} ${styles.rocket}`}>🚀</div>
          <div className={`${styles.emoji} ${styles.satellite}`}>🛰️</div>
          <div className={`${styles.emoji} ${styles.earth}`}>🌏</div>
          <div className={styles.stars}></div>
        </div>
        <h4 className={styles.errorTitle}>Lost in Space</h4>
        <p className={styles.errorMessage}>Oh no! You seem to be stranded in space.</p>
        <p className={styles.errorMessage}>The page you are looking for does not exist. Please try another page.</p>
        <Link
          to="/"
          className={styles.homeLink}>
          back to Earth
        </Link>
      </div>
    </div>
  );
};

export default Error404;
