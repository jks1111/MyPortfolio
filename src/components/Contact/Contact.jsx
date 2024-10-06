import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Get in touch.</h2>
        <p>I would be happy to further discuss my experiences with you, simply shoot me an email or message me on LinkedIn! :)</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          
          <a href="mailto:janhavis1111@gmail.com"><img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" /></a>
        </li>
        <li className={styles.link}>
          
          <a href="https://www.linkedin.com/in/janhavi-s-122752229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          /></a>
        </li>
        <li className={styles.link}>
          
          <a href="https://www.github.com/jks1111"><img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" /></a>
        </li>
      </ul>
    </footer>
  );
};
