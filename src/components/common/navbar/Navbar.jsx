import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <ul className={styles.topUL}>
        <li>
          <p>Categories</p>
          <ul className={styles.bottomUL}>
            <li onClick={() => navigate("/categories", { state: { category: "business" } })}>Business</li>
            <li onClick={() => navigate("/categories", { state: { category: "entertainment" } })}>Entertainment</li>
            <li onClick={() => navigate("/categories", { state: { category: "general" } })}>General</li>
            <li onClick={() => navigate("/categories", { state: { category: "health" } })}>Health</li>
            <li onClick={() => navigate("/categories", { state: { category: "science" } })}>Science</li>
          </ul>
        </li>
        <li>
          <p>Contact</p>
          <ul className={styles.bottomUL}>
            <li
              onClick={() => {
                window.open("mailto:bea.pitzschke.coden@gmail.com");
              }}>
              send Mail
            </li>
            <li
              onClick={() => {
                window.open("tel:+4915750000000");
              }}>
              call
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
