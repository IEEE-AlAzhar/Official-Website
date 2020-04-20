import React, { Component } from "react";
import styles from "./style.module.css";

class UpComingEvents extends Component {
  render() {
    const events = this.state.upComing.map((event) => {
      return (
        <div key={event.id} className={styles.upcomingEvent}>
          <div className={styles.upcomingEvent__content}>
            <h1 className={styles.upcomingEvent__heading}>{event.title}</h1>
            <p className={styles.upcomingEvent__body}>{event.body}</p>
          </div>
          <div className={styles.upcomingEvent__btnContainer}>
            <button className={styles.upcomingEvent__btnContainer__btn}>
              Register Now
            </button>
          </div>
        </div>
      );
    });
    return (
      <div className={styles.eventsList}>
        <h1 className={styles.eventsList__heading}>UpComing Events</h1>
        {events}
      </div>
    );
  }

  state = {
    upComing: [
      {
        id: 1,
        title: "Tech Nuts",
        body:
          "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
        register: "register Now",
      },
      {
        id: 2,
        title: "Tech Nuts",
        body:
          "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
        register: "register Now",
      },
      {
        id: 3,
        title: "Tech Nuts",
        body:
          "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
        register: "register Now",
      },
    ],
  };
}
export default UpComingEvents;
