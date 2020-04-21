import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Layout from "shared/layout";
import { getEvents } from '../../services/events.service'
import styles from './style.module.css'


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default class SingleEventPage extends Component {
  constructor() {
    super();
    this.state = {
      event: {}
    }
  }

  componentDidMount = () => {
    getEvents()
    .then(response => {
      response.data.forEach(event => {
        if(event.id === this.props.match.params.id) {
          return this.setState({ event })
        }
      });
    })
    .catch(console.log);
  }



  
  render() {
    const { title, cover, description } = this.state.event
    return (
      <Layout>
        <div className='text-center'>
          <header className='pt-3'>
            <h1 className='my-5'>{title}</h1>
          </header>
          <img className={`w-100 ${styles['event-cover']}`} src={cover} alt='' />
          <article className='container mt-5 text-left'>
            {description}
          </article>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px">
              <img className={`w-100 ${styles['event-cover']}`} src={cover} alt='' />
              <img className={`w-100 ${styles['event-cover']}`} src={cover} alt='' />
              <img className={`w-100 ${styles['event-cover']}`} src={cover} alt='' />
              <img className={`w-100 ${styles['event-cover']}`} src={cover} alt='' />
          </Carousel>
        </div>
      </Layout>
    );
  }
}