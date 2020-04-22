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
          <div className={styles[`events-container`]}>
            <EventCard
              events={this.state.eventsList ? this.state.eventsList : null}
            />
          </div>
        </Layout>
      </>
    );
  }
}
