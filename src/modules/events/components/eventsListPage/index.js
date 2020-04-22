import React, { Component } from "react";
import Layout from "shared/layout/index";
import styles from "./style.module.css";
import { getEvents } from "../../services/events.service";
export default class EventsListPage extends Component {
  state = {
    eventsList: null,
  };
  componentDidMount() {
    getEvents().then((res) => {
      this.setState({
        eventsList: res.data,
      });
      console.log(res.data);
    });
  }
  render() {
    return (
      <>
        <Layout>
          <div className={styles[`events-container`]}>
            {this.state.eventsList
              ? this.state.eventsList.map((event) => {
                  if (event.status === "upcoming") {
                    return (
                      <div key={event.id} className={styles[`upcoming-events`]}>
                        <img
                          src={event.cover}
                          alt="event cover"
                          className={styles[`upcoming-events__cover`]}
                        />
                        <h1>{event.title}</h1>
                        <p>{event.description}</p>
                        <p>{event.endDate}</p>
                        <p>{event.location}</p>
                      </div>
                    );
                  } else {
                    return (
                      <div key={event.id} className={styles[`past-events`]}>
                        <img
                          src={event.cover}
                          alt="event cover"
                          className={styles[`past-events__cover`]}
                        />
                        <h1>{event.title}</h1>
                        <p>{event.description}</p>
                        <p>{event.endDate}</p>
                        <p>{event.location}</p>
                      </div>
                    );
                  }
                })
              : null}
          </div>
        </Layout>
      </>
    );
  }
}
