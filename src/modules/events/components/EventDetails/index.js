import React, { Component } from "react";
import ApplyButton from "../ApplyButton/ApplyButton";
import PopupContent from "../PopupContent/PopupContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";
import { parseDate } from "shared/services/date.service";

class EventDetails extends Component {
  getPopupContent = () => {
    const { form, title } = this.props.details;
    return <PopupContent form={form} title={title} />;
  };

  render() {
    const {
      startDate,
      endDate,
      status,
      location,
      form,
      cover,
    } = this.props.details;

    return (
      <section className="row">
        <span className="col-md">
          <FontAwesomeIcon icon={faClock} size="1x" />
          <p className={`h6 m-0 p-0 ${styles["event-details_text"]}`}>
            {" "}
            From : {parseDate(startDate)}
          </p>
          <p className={`h6 m-0 p-0 ${styles["event-details_text"]}`}>
            {" "}
            To : {parseDate(endDate)}
          </p>
        </span>
        {location ? (
          <span className="col-md">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" />
            <p className={`h5 ${styles["event-details_text"]}`}>{location}</p>
          </span>
        ) : null}
        {form && status === "upcoming" ? (
          <ApplyButton cover={cover} getPopupContent={this.getPopupContent} />
        ) : null}
      </section>
    );
  }
}

export default EventDetails;
