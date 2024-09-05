import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
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
        <li onClick={() => navigate("/weather", { state: { category: "weather" } })}>
          <p>Weather</p>
        </li>
        <li onClick={() => navigate("/userSettings", { state: { category: "userSettings" } })}>
          <p>⚙️</p>
        </li>
        {/* <li onClick={() => navigate("/")}>
          <p>Home</p>
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
