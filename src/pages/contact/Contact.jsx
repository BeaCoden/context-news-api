import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2>Contact</h2>
      <p>
        Send me an email at: <a href="mailto:bea.pitzschke.coden@gmail.com"> </a>
      </p>
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
    </div>
  );
};

export default Contact;
