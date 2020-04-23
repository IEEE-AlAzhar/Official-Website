import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Layout from "shared/layout";
import Gallery from "../components/Gallery/Gallery";
import EventDetails from "../components/EventDetails/EventDetails";
import { getEvents } from "modules/events/services/events.service";
import styles from "./style.module.css";

class SingleEventPage extends Component {
  constructor() {
    super();
    this.state = {
      event: {},
    };
  }

  componentDidMount = () => {
    const { match } = this.props;
    getEvents().then((response) => {
      const event = response.data.find((event) => event.id === match.params.id);
      if (event) {
        this.setState({ event });
      }
    });
  };

  render() {
    const {
      title,
      cover,
      description,
      images,
      status,
      startDate,
      endDate,
      location,
      startTime,
      endTime,
      form,
    } = this.state.event;

    return (
      <Layout>
        {!title ? (
          <section className="my-5 py-5">
            <h1 className="text-center my-5 py-5">Loading...</h1>
          </section>
        ) : (
          <div>
            <Helmet>
              <title>{title}</title>
            </Helmet>
            <div className="text-center">
              <img
                className={`w-100 ${styles["event-cover"]}`}
                src={cover}
                alt="Event Cover"
              />
              <section className="container">
                <header className="px-5 mx-5">
                  <h1
                    className="h2 my-5"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {title}
                  </h1>
                </header>
                <EventDetails
                  details={{
                    startDate,
                    startTime,
                    endDate,
                    endTime,
                    location,
                    form,
                    cover,
                    title,
                    status,
                  }}
                />
                <section>
                  <article className="my-5 text-left">{description}</article>
                  {images ? <Gallery images={images} /> : null}
                </section>
              </section>
            </div>
          </div>
        )}
      </Layout>
    );
  }
}

export default SingleEventPage;
