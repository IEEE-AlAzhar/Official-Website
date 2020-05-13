import React, { Component } from "react";
import Carousel from "react-multi-carousel";
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

class Gallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <section className="my-5">
        <h2 className="h3 mt-5 mb-4 section_heading">Event Gallery</h2>
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
          {images.map((img, index) => {
            return (
              <figure key={index} className={styles.image_container}>
                <img
                  className={styles["gallery-img"]}
                  src={img}
                  alt="Event Gallery"
                />
              </figure>
            );
          })}
        </Carousel>
      </section>
    );
  }
}

export default Gallery;
