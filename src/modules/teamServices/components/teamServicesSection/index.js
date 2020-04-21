import React, { Component } from "react";
import data from "../../store/services.json";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

export default class TeamServicesSection extends Component {
  render() {
    return (
      <section className={styles["team-service-section"]}>
        <h2 className={styles["team-service-section_heading"]}>services</h2>
        <div className="container">
          <div className="row">
            {data.map((data, index) => {
              return (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                  <div className="container">
                    <div
                      key={index}
                      className={styles["team-service-section"]}
                      style={{ width: "20rem" }}
                    >
                      <img
                        src={data.cover}
                        alt="this is cover photo"
                        style={{ height: "15rem" }}
                      />
                      <div className={styles["team-service-section_body"]}>
                        <h3 className={styles["team-service-section_title"]}>
                          {data.title}
                        </h3>
                        <p
                          className={styles["team-service-section_description"]}
                        >
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <Link className={styles["team-service-section_button"]}>
                          See More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
