import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2>Contact</h2>
      <p>
        Send me an email at: <a href="mailto:bea.pitzschke.coden@gmail.com"> </a>
      </p>
    </div>
  );
};

export default Contact;
