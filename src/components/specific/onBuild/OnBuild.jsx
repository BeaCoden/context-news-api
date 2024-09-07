import React from "react";
import { Link } from "react-router-dom";
import styles from "./OnBuild.module.css";

const OnBuild = () => {
  return (
    <div className={styles.container}>
      <div className={styles.constructionContent}>
        <div className={styles.visual}>
          <div className={styles.hammer}>🛠️</div>
          <div className={styles.screw}>🔩</div>
          <div className={styles.wrench}>🔧</div>
        </div>
        <h4 className={styles.title}>Page Under Construction</h4>
        <p className={styles.message}>This page is currently being built. Please check back later!</p>
        <Link
          to="/"
          className={styles.homeLink}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default OnBuild;
