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
          <div className={styles[`events-list`]}>
            <div className="container">
              <h1 className={styles[`events-heading`]}>Our Events</h1>
              <h2 className={styles[`events-heading`]}>Upcoming Events</h2>
              <div className="row">
                {this.state.eventsList ? (
                  this.state.eventsList.map((event) => {
                    if (event.status === "upcoming") {
                      return (
                        <div className="lg-col-12 md-col-12 sm-col-12 mt-4">
                          <EventCard event={event} key={event.id} />
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })
                ) : (
                  <span>Loading ...</span>
                )}
                <h2 className={styles[`past-heading`]}>Past Events</h2>
                <div className="row">
                  {this.state.eventsList ? (
                    this.state.eventsList.map((event) => {
                      if (event.status !== "upcoming") {
                        return (
                          <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                            <EventCard event={event} key={event.id} />
                          </div>
                        );
                      } else {
                        return null;
                      }
                    })
                  ) : (
                    <span>Loading ...</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}
