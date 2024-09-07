import React from "react";
import styles from "./UserSettings.module.css";
import Footer from "../../components/common/footer/Footer";
import OnBuild from "../../components/specific/onBuild/OnBuild";

const UserSettings = () => {
  return (
    <div className={styles.container}>
      <OnBuild />
      <Footer />
    </div>
  );
};

export default UserSettings;
