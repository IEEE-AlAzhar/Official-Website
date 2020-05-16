import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCalendarCheck,
  faCalendarTimes,
} from "@fortawesome/free-solid-svg-icons";
import { parseDate } from "shared/services/date.service";
import { isArabic } from "shared/services/language.service";
import LazyImage from "shared/lazy-image";

class EventCard extends Component {
  render() {
    const { event } = this.props;
    let isDescArabic = isArabic(event.metaDescription);
    return (
      <section className={styles["event-card_content"]}>
        <figure className={styles["events-card_cover"]} key={event}>
          <Link to={"/events/" + event._id}>
            <LazyImage
              alt={`event ${event.title}`}
              src={event.cover}
              key={event._id}
            />
          </Link>
          <div className={styles["active-upcoming_event"]}>
            {event.status === "upcoming" ? <span>Upcoming</span> : ""}
          </div>
          <figcaption>
            <h3>
              <Link
                to={"/events/" + event._id}
                className={styles["event-card_title"]}
              >
                {event.title}
              </Link>
            </h3>
            <p
              className={`${styles["event-card_description"]} ${
                isDescArabic && "letter-spacing-none"
              }`}
            >
              {event.metaDescription}
            </p>
          </figcaption>
        </figure>
        <section className={styles["event-card_SubDescription"]}>
          <div className={styles["event-card-SubDescription_content"]}>
            <div className={styles["event-card-SubDescription_info"]}>
              <FontAwesomeIcon
                icon={faCalendarCheck}
                className={styles["event-card_icon"]}
              />
              <span> {parseDate(event.startDate)}</span>
            </div>
            <div className={styles["event-card-SubDescription_info"]}>
              {event.location && event.location.length ? (
                <>
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className={styles["event-card_icon"]}
                  />
                  <span>{event.location}</span>
                </>
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faCalendarTimes}
                    className={styles["event-card_icon"]}
                  />
                  <span>{parseDate(event.endDate)}</span>{" "}
                </>
              )}
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default EventCard;
