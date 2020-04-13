import React, { Component } from "react";
import styles from "./style.module.css";
import { aboutHeaderVid } from "assets/about-header-vid.mp4";

class AboutHeader extends Component {
  render() {
    return (
      <>
        <header className={styles.header_about}>
          <h1 className={styles.header_about__heading}> Know more about us </h1>
          <video controls className={styles.header_about__video}>
            <source src={aboutHeaderVid} type="video/mp4" />
          </video>
        </header>
      </>
    );
  }
}
export default AboutHeader;
