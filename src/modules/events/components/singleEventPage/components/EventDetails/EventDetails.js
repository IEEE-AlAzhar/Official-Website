import React, { Component } from "react";
import ApplyButton from "../ApplyButton/ApplyButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";

class Gallery extends Component {
  render() {
    const {
      startDate,
      startTime,
      endDate,
      status,
      endTime,
      location,
      form,
      cover,
      title,
    } = this.props.details;

    return (
      <section className="row m-4">
        <span className="col-md">
          <FontAwesomeIcon icon={faClock} size="1x" />
          <p className={`h5 m-0 ${styles["event-details_text"]}`}>
            {" "}
            From : {startDate} at {startTime}
          </p>
          <p className={`h5 m-0 ${styles["event-details_text"]}`}>
            {" "}
            To : {endDate} at {endTime}
          </p>
        </span>
        {location ? (
          <span className="col-md">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" />
            <p className={`h4 ${styles["event-details_text"]}`}>{location}</p>
          </span>
        ) : null}
        {form && status === "upcoming" ? (
          <ApplyButton cover={cover} form={form} title={title} />
        ) : null}
      </section>
    );
  }
}

export default Gallery;
