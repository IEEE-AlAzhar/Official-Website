import React, { Component } from "react";

import { Helmet } from "react-helmet";
import Layout from "shared/layout";

import services from "../../store/services.json";
import styles from "./style.module.css";

export default class SingleServicePage extends Component {
  state = {};

  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({ service: services.find((service) => service.id === id) });
  }

  render() {
    const { service } = this.state;
    if (!this.state.service) return <p>Not Found</p>;
    return (
      <>
        <Helmet>
          <title>{service.title}</title>
        </Helmet>
        <Layout>
          <div className="container">
            <header className={`${styles["single-service__header"]}`}>
              <h1 className={styles["single-service__title"]}>
                {service.title}
              </h1>
              <img
                src={service.cover}
                className={`${styles["single-service__cover"]} d-block`}
                alt={`${service.title} cover`}
              />
            </header>
            <section className={`${styles["single-service__content"]}`}>
              <p className="mb-5">{service.description}</p>
              {!service.gallery ? null : (
                <div
                  id="carousel"
                  className="carousel slide carousel-fade"
                  data-ride="carousel"
                  data-interval="3000"
                >
                  <ol className="carousel-indicators">
                    {service.gallery.map((image, index) => (
                      <li
                        key={index}
                        data-target="#carousel"
                        data-slide-to={`${index}`}
                        className={`${index === 0 ? "active" : ""}`}
                      ></li>
                    ))}
                  </ol>
                  <div className="carousel-inner">
                    {service.gallery.map((image, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        } ${styles.carousel__item}`}
                      >
                        <img
                          src={image}
                          className={`d-block img-fluid ${styles.carousel__image}`}
                          alt={`IEEE ${service.title} service`}
                        />
                      </div>
                    ))}
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carousel"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className={`${styles["carousel-control--focus"]} carousel-control-prev-icon`}
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carousel"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className={`${styles["carousel-control--focus"]} carousel-control-next-icon`}
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              )}
            </section>
          </div>
        </Layout>
      </>
    );
  }
}
