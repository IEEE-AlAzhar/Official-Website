import React, { Component } from "react";
import data from "../../store/services.json";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import LazyImage from "shared/lazy-image";

export default class TeamServicesSection extends Component {
  render() {
    return (
      <section className={styles["team-service-section"]}>
        <h2 className={styles["team-service-section_heading"]}>services</h2>
        <div className="container">
          <div data-testid="services-container" className="row">
            {data.map((data, index) => {
              return (
                <div
                  key={index}
                  className="col-lg-4 col-md-6 col-sm-12 overflow-hidden text-center"
                >
                  <Link
                    to={`/services/${data.id}`}
                    className={styles["team-service-section_container"]}
                  >
                    <LazyImage
                      className={styles["team-service-section_cover"]}
                      src={data.cover}
                      alt={`${data.title}'s cover`}
                    />
                    <div className={styles["team-service-section_content"]}>
                      <h3 className={styles["team-service-section_title"]}>
                        {data.title}
                      </h3>
                      <p className="px-3">
                        <span data-testid="service-description">
                          {data.metaDescription
                            .split(" ")
                            .slice(0, 8)
                            .join(" ")}
                        </span>
                        ...
                      </p>
                      <span>
                        <Link
                          tabIndex="-1"
                          data-testid="service-link"
                          to={`/services/${data.id}`}
                          className={styles["team-service-section_button"]}
                        >
                          Read more about this service
                        </Link>
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
