import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import styles from './style.module.css'


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

class Gallery extends Component {
  render() {
    const { images } = this.props
    return (
      <section className='my-5'>
        <h3 className='h2 mt-5 mb-4'>Event Gallery</h3>
        <Carousel
          swipeable={true}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          >
          {
            images.map(img => {
              return (
                <figure key={img}>
                  <img className={styles['gallery-imgs']} src={img} alt='gallery images' />
                </figure>
              )
            })
          }
        </Carousel>
      </section>
    )
  }
}

export default Gallery;