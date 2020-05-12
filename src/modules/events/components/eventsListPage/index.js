import React, { Component } from "react";

import styles from "./style.module.css";

import { Helmet } from "react-helmet";

import EventsService from "../../services/events.service";
import EventCard from "../eventCard";
export default class EventsListPage extends Component {
  state = {
    upcomingEvents: null,
    pastEvents: null,
  };

  constructor(props) {
    super(props);
    this._eventsServices = new EventsService();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    let upcomingEvents = [];
    let pastEvents = [];
    this._eventsServices.list().then((response) => {
      response.map((event) => {
        if (event.status === "upcoming") upcomingEvents.push(event);
        else pastEvents.push(event);
        return false;
      });

      return this.setState({
        upcomingEvents,
        pastEvents,
      });
    });
  }
  render() {
    return (
      <>
        <Helmet>
          <title>Our Events | IEEE Al-Azhar Student Branch </title>
        </Helmet>
        <h1 className={styles[`events-heading`]}>Our Events</h1>

        <div className="container">
          {this.state.upcomingEvents && this.state.upcomingEvents.length ? (
            <>
              <section className="events-upcoming row pb-5 justify-content-center">
                <h2 className={`${styles[`events-heading__upcoming`]} mb-3`}>
                  Upcoming Events
                </h2>
                {this.state.upcomingEvents.map((event) => {
                  return (
                    <div
                      className="col-lg-4 col-md-6 col-sm-12  mt-4"
                      key={event._id}
                    >
                      <EventCard event={event} />
                    </div>
                  );
                })}
              </section>
              <section className="events-past row pb-5">
                <h2 className={`${styles[`events-heading__past`]} mb-3`}>
                  Past Events
                </h2>
                {this.state.pastEvents.map((event) => {
                  return (
                    <div
                      className="col-lg-4 col-md-6 col-sm-12  mt-4"
                      key={event._id}
                    >
                      <EventCard event={event} />
                    </div>
                  );
                })}
              </section>
            </>
          ) : (
            <div className="row pb-5">
              {this.state.pastEvents &&
                this.state.pastEvents.map((event) => (
                  <div
                    className="col-lg-4 col-md-6 col-sm-12  mt-4"
                    key={event._id}
                  >
                    <EventCard event={event} />
                  </div>
                ))}
            </div>
          )}
        </div>
      </>
    );
  }
}
