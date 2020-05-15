import React, { Component } from "react";
import styles from "./style.module.css";

import AboutVideo from "../video";
import { Link } from "react-router-dom";

export default class About extends Component {
  render() {
    return (
      <section className={styles["about-home_section"]}>
        <div className="container">
          <h2 className="section_heading">About Us</h2>
          <div className="row">
            <div className="col-lg-6">
              <div className={styles.about__video}>
                <AboutVideo />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles["about-home_Info"]}>
                <p className={styles["about-home_lead"]}>
                  IEEE Al-Azhar University Student Branch is a student activity
                  continued to IEEE Egypt Section, located in Al-Azhar
                  University in Cairo and est. 2011 We provide free courses and
                  trainings for students (especially engineering students) to
                  bridge the gap between the scientific and practical sides The
                  internal structure of the team includes a number of committees
                  which are academic like technical and some other operational
                  committees like HR, PR & FR, Marketing, Multimedia, DCR and
                  Logistics
                </p>
                <Link to="/about-us" className={styles["about-home_button"]}>
                  Know more about us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
