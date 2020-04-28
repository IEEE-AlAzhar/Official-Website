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

          <div className="container">
            <h2 className={styles[`events-heading`]}>Upcoming Events</h2>
            <section className="row ">
              {this.state.eventsList ? (
                this.state.eventsList.map((event) => {
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
              ) : (
                <span>Loading ...</span>
              )}
            </section>
            <h2 className={styles[`past-heading`]}>Past Events</h2>
            <section className="row">
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
        </Layout>
      </>
    );
  }
}
