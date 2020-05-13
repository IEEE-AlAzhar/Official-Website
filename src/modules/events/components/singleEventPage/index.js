import React, { Component } from "react";

import { Helmet } from "react-helmet";

import Gallery from "../Gallery";
import EventDetails from "../EventDetails/";

import EventsService from "modules/events/services/events.service";

import styles from "./style.module.css";

class SingleEventPage extends Component {
  state = {
    event: {},
  };

  constructor(props) {
    super(props);
    this._eventsServices = new EventsService();
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);

    const { match, history } = this.props;
    this._eventsServices
      .getById(match.params.id)
      .then((event) => {
        if (event) {
          this.setState({ event });
        } else {
          history.push("/404");
        }
      })
      .catch((err) => {
        history.push("/404");
      });
  };

  render() {
    const {
      title,
      cover,
      description,
      metaDescription,
      images,
      status,
      startDate,
      endDate,
      location,
      form,
    } = this.state.event;

    return (
      <>
        {!title ? (
          <section className="my-5 py-5">
            <h1 className="text-center my-5 py-5">Loading...</h1>
          </section>
        ) : (
          <div>
            <Helmet>
              <title>{title} | IEEE Al-Azhar Student Branch </title>
              <meta name="description" content={metaDescription} />
            </Helmet>
            <div className="text-center">
              <img
                className={`w-100 ${styles["event-cover"]}`}
                src={cover}
                alt="Event Cover"
              />
              <section className="container">
                <header className="px-5 mx-5">
                  <h1 className="h2 my-5 section_heading">{title}</h1>
                </header>
                <EventDetails
                  details={{
                    startDate,
                    endDate,
                    location,
                    form,
                    cover,
                    title,
                    status,
                  }}
                />
                <section>
                  <article
                    className="my-5 text-left"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                  {images.length ? <Gallery images={images} /> : null}
                </section>
              </section>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default SingleEventPage;
