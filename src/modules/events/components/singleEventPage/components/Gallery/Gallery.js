import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  return (
    <button
      className={`${styles["gallery-arrow"]} ${styles["gallery-arrow_right"]}`}
      onClick={() => onClick()}
    >
      <FontAwesomeIcon icon={faChevronRight} />
      <span className="sr-only"> Slide right controller </span>
    </button>
  );
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  return (
    <button
      className={`${styles["gallery-arrow"]} ${styles["gallery-arrow_left"]}`}
      onClick={() => onClick()}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
      <span className="sr-only"> Slide left controller </span>
    </button>
  );
};

class Gallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <section className="my-5">
        <h2 className="h3 mt-5 mb-4 section_heading">Event Gallery</h2>
        <Carousel
          swipeable={true}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2500}
          keyBoardControl={true}
          transitionDuration={1000}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px mb-3"
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
        >
          {images.map((img, index) => {
            return (
              <figure key={index}>
                <img
                  className={styles["gallery-imgs"]}
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
