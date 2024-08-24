import React, { useState } from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
// import Navbar from "../navbar/Navbar";

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search", { state: search });
    setSearch("");
  };

  return (
    <div className={styles.container}>
      <h1>
        <em>news</em>
      </h1>
      <div className={styles.top}>
        <form
          onSubmit={handleSubmit}
          className={styles["search-bar"]}>
          <div className={styles["input-wrapper"]}>
            <input
              type="search"
              name="search"
              pattern=".*\S.*"
              required
              className={`${styles.search} ${styles["search-input"]}`}
              value={search}
              placeholder="Search your news..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className={styles["search-btn"]}>
              🔍
            </button>
          </div>
        </form>
      </div>
      {/* <Navbar /> */}
    </div>
  );
};

export default Header;
