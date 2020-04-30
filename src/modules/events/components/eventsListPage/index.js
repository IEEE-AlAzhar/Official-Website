import React, { Component } from "react";

import styles from "./style.module.css";

import { getEvents } from "../../services/events.service";
import EventCard from "../eventCard";
export default class EventsListPage extends Component {
  state = {
    eventsList: null,
  };
  componentDidMount() {
    getEvents().then((res) => {
      this.setState({
        eventsList: res.data,
      });
    });
  }
  render() {
    return (
      <>
        <h1 className={styles[`events-heading`]}>Our Events</h1>

        <div className="container">
          <section className="row py-5 justify-content-center">
            <h2 className={styles[`events-heading__upcoming`]}>
              Upcoming Events
            </h2>
            {this.state.eventsList
              ? this.state.eventsList.map((event) => {
                  if (event.status === "upcoming") {
                    return (
                      <div
                        className="col-lg-4 col-md-6 col-sm-12  mt-4"
                        key={event.id}
                      >
                        <EventCard event={event} />
                      </div>
                    );
                  } else {
                    return null;
                  }
                })
              : null}
          </section>
          <hr />
          <section className="row py-5 mb-5">
            <h2 className={styles[`events-heading__past`]}>Past Events</h2>
            {this.state.eventsList ? (
              this.state.eventsList.map((event) => {
                if (event.status !== "upcoming") {
                  return (
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 mt-4 "
                      key={event.id}
                    >
                      <EventCard event={event} />
                    </div>
                  );
                } else {
                  return null;
                }
              })
            ) : (
              <span>Loading ...</span>
            )}
          </section>
        </div>
      </>
    );
  }
}
