import React from "react";
import styles from "./Newsletter.module.css";
import Error404 from "../../components/specific/error404/Error404";
import Footer from "../../components/common/footer/Footer";

const Newsletter = () => {
  return (
    <div className={styles.container}>

      <Error404 />
      <Footer />
    </div>
  );
};

export default Newsletter;
