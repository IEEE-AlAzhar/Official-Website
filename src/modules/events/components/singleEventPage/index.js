import React, { Component } from "react";

import { Helmet } from "react-helmet";

import Gallery from "../Gallery";
import EventDetails from "../EventDetails/";

import EventsService from "modules/events/services/events.service";

import styles from "./style.module.css";
import Loading from "shared/loading";
import { isArabic } from "shared/services/language.service";

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
    let isDescArabic = isArabic(metaDescription);

    return (
      <>
        {!title ? (
          <div className="container my-5">
            <Loading title="Loading Event ..." />
          </div>
        ) : (
          <div className="mt-5">
            <Helmet>
              <title>{title} | IEEE Al-Azhar Student Branch </title>
              <meta name="description" content={metaDescription} />
              <meta property="og:title" content={title} />
              <meta property="og:url" content={window.location.origin} />
              <meta property="og:type" content="website" />
              <meta property="og:description" content={metaDescription} />
              <meta property="og:image" content={cover} />
            </Helmet>
            <div className="text-center mt-5 pt-5">
              <section className="container">
                <img
                  className={`w-100 ${styles["event-cover"]}`}
                  src={cover}
                  alt="Event Cover"
                />
                <header className="mx-5">
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
                    className={`my-5 text-left ${
                      isDescArabic && "letter-spacing-none"
                    }`}
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                </section>
                {images.length ? <Gallery images={images} /> : null}
              </section>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default SingleEventPage;
