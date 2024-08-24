import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h1>ℹ️</h1>
      <p>© 2021. All rights reserved</p>
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
  );
};

export default Footer;
