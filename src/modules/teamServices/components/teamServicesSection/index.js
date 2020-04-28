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
                  <div className={styles["team-service-section_container"]}>
                    <img
                      className={styles["team-service-section_cover"]}
                      src={data.cover}
                      alt="Service Cover"
                    />
                    <div className={styles["team-service-section_content"]}>
                      <h3 className={styles["team-service-section_title"]}>
                        {data.title}
                      </h3>
                      <p className={styles["team-service-section_description"]}>
                        {data.description.slice(0, 100)}...
                      </p>
                      <Link
                        className={styles["team-service-section_button"]}
                        to={data.id}
                      >
                        discover the details
                      </Link>
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
