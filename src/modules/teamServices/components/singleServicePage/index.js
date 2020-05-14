import React, { Component } from "react";

import { Helmet } from "react-helmet";
import Carousel from "react-multi-carousel";

import services from "../../store/services.json";
import styles from "./style.module.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 991, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default class SingleServicePage extends Component {
  state = {};

  componentDidMount() {
    window.scrollTo(0, 0);

    const { id } = this.props.match.params;
    let service = services.find((service) => service.id === id);
    if (!service) {
      return this.props.history.push("/404");
    }
    this.setState({ service });
  }

  render() {
    const { service } = this.state;

    return (
      <>
        {service && (
          <>
            <Helmet>
              <title>{service.title}</title>
              <meta name="description" content={service.metaDescription} />
              <meta name="description" content={service.metaDescription} />
              <meta property="og:title" content={service.title} />
              <meta property="og:url" content={window.location.origin} />
              <meta property="og:type" content="website" />
              <meta
                property="og:description"
                content={service.metaDescription}
              />
              <meta property="og:image" content={service.cover} />
            </Helmet>
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
                <p
                  className="mb-5"
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />
                {!service.gallery ? null : (
                  <Carousel
                    swipeable={true}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2500}
                    keyBoardControl={true}
                    transitionDuration={1000}
                    removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                    itemClass="carousel-item-padding-30-px mb-3 px-lg-3"
                  >
                    {service.gallery.map((img, index) => {
                      return (
                        <figure key={index} className={styles.image_container}>
                          <img
                            className={styles["gallery-img"]}
                            src={img}
                            alt="Service Gallery"
                          />
                        </figure>
                      );
                    })}
                  </Carousel>
                )}
              </section>
            </div>
          </>
        )}
      </>
    );
  }
}
