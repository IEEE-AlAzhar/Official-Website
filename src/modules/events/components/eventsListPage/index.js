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
        {this.state.eventsList ? console.log(this.state.eventsList) : null}
        <Layout>
          <h1 className={styles[`events-heading`]}>Our Events</h1>
          <br />
          <div className={styles[`events-container`]}>
            {this.state.eventsList
              ? this.state.eventsList.map((event) => {
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
              : null}
            <h1 className={styles[`past-heading`]}>Past events</h1>
            {this.state.eventsList
              ? this.state.eventsList.map((event) => {
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
              : null}
          </div>
        </Layout>
      </>
    );
  }
}
