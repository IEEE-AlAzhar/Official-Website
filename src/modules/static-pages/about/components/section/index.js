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
              <AboutVideo />
            </div>
            <div className="col-lg-6">
              <div className={styles["about-home_Info"]}>
                <p className={styles["about-home_lead"]}>
                  Was founded in 2012 its dependent to "IEEE EGYPT SECTION"
                  which exists in all universities in Egypt.Our Mission: Raising
                  the Name of Al-Azhar University. Providing the required
                  scientific and practical conditions to prepare a successful
                  engineer from the students , so they become able to compete in
                  the labor market.
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
