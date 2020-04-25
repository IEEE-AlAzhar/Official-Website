import React, { Component } from "react";
import Layout from "shared/layout/index";
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
        <Layout>
          <h1 className={styles[`events-heading`]}>Our Events</h1>
          <h2 className={styles[`events-heading`]}>Upcoming Events</h2>
          <div className={styles[`events-container`]}>
            {this.state.eventsList ? (
              this.state.eventsList.map((event) => {
                if (event.status === "upcoming") {
                  return (
                    <div className={styles["upcoming-events"]}>
                      <EventCard event={event} />
                    </div>
                  );
                } else {
                  return null;
                }
              })
            ) : (
              <p>Loading ...</p>
            )}
            <h2 className={styles[`past-heading`]}>Past Events</h2>
            {this.state.eventsList ? (
              this.state.eventsList.map((event) => {
                if (event.status !== "upcoming") {
                  return (
                    <div>
                      <EventCard event={event} />
                    </div>
                  );
                } else {
                  return null;
                }
              })
            ) : (
              <p>Loading ...</p>
            )}
          </div>
        </Layout>
      </>
    );
  }
}
