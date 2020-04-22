import React, { Component } from "react";
import ApplyButton from '../ApplyButton/ApplyButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faClock
} from "@fortawesome/free-solid-svg-icons";
import styles from './style.module.css';


class Gallery extends Component {
    render() {
        const { 
            startDate, startTime, endDate, 
            endTime, location, form, cover
        } = this.props.details;

        return(
            <section className='row m-4'>
                <span className='col-md my-3'>
                    <FontAwesomeIcon icon={faClock} size="2x" />
                    <p className={`m-0 ${styles['event-details_text']}`}> From : {startDate} at {startTime}</p>
                    <p className={`m-0 ${styles['event-details_text']}`}> To : {endDate} at {endTime}</p>
                </span>
                <span className='col-md my-3'>
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
                    <p className={styles['event-details_text']}>{location}</p>
                </span>
                {
                    form ?
                        <ApplyButton cover={cover} />
                    : null
                }
            </section>
        );
    }
}

export default Gallery;