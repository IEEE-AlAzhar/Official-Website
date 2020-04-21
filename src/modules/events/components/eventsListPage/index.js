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
          {this.state.eventsList
            ? this.state.eventsList.map((event) => {
                if (event.status === "upcoming") {
                  return (
                    <div key={event.id}>
                      <div className={styles[`upcoming-events`]}>
                        <img src={event.cover} alt="event cover" />
                        <h1>{event.title}</h1>
                        <p>{event.description}</p>
                        <p>{event.endDate}</p>
                        <p>{event.location}</p>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={event.id}>
                      <section>
                        <img src={event.cover} alt="event cover" />
                        <h1>{event.title}</h1>
                        <p>{event.description}</p>
                        <p>{event.endDate}</p>
                        <p>{event.location}</p>
                      </section>
                    </div>
                  );
                }
              })
            : null}
        </Layout>
      </>
    );
  }
}
