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
      </ul>
    </div>
  );
};

export default Navbar;
