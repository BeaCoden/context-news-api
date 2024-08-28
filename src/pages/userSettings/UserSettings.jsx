import React from "react";
import styles from "./UserSettings.module.css";
import Error404 from "../../components/specific/error404/Error404";
import Footer from "../../components/common/footer/Footer";

const UserSettings = () => {
  return (
    <div className={styles.container}>
      <Error404 />
      <Footer />
    </div>
  );
};

export default UserSettings;
