import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const toggleFooter = () => {
    setIsFooterVisible(!isFooterVisible);
  };

  return (
    <div>
      <button
        className={styles.toggleButton}
        onClick={toggleFooter}>
        {isFooterVisible ? "❌" : "ℹ️"}
      </button>
      <footer className={`${styles.footer} ${isFooterVisible ? styles.visible : ""}`}>
        <p>
          <small>© 2024 by BeaCoden | All rights reserved</small>
        </p>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/username"
              target="_blank"
              rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/username"
              target="_blank"
              rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
