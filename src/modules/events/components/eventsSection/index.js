import React, { Component } from "react";
import EventsService from "./../../services/events.service";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import EventCard from "../eventCard";

class EventsSection extends Component {
  state = {
    events: [],
  };

  constructor(props) {
    super(props);
    this._eventsServices = new EventsService();
  }

  componentDidMount() {
    this._eventsServices.list().then((response) => {
      console.log(response);
      this.setState({
        events: response.slice(0, 3),
      });
    });
  }

  render() {
    const { events } = this.state;

    return (
      <section className={styles["event_section"]}>
        <div className="container">
          <h2 className="section_heading">our events</h2>
          <div className="row justify-content-center">
            {events.length ? (
              events.map((eventsCard) => (
                <div
                  key={eventsCard._id}
                  className="col-lg-4 col-md-6 col-sm-12"
                >
                  <EventCard event={eventsCard} />
                </div>
              ))
            ) : (
              <div className="text-center"> loading.... </div>
            )}
          </div>
          <div className="row">
            <Link to="/events" className={styles["event-section_button"]}>
              discover our events
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default EventsSection;
