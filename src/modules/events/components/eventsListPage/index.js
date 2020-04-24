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
          <h1 className={styles[`events__hea-ding`]}>Our Events</h1>
          <div className={styles[`events__container`]}>
            {this.state.eventsList.map((event) => {
              if (event.status === "upcoming") {
                return (
                  <div className="col-12">
                    <EventCard event={event} />
                  </div>
                );
              }
            })}
          </div>
        </Layout>
      </>
    );
  }
}
