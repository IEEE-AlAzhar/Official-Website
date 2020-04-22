import React, { Component } from "react";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faClock
} from "@fortawesome/free-solid-svg-icons";
import styles from './style.module.css';

class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
    }

    onOpenModal = () => {
        console.log('open')
        this.setState({ open: true });
    };
    
    onCloseModal = () => {
        console.log('close')
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        const { 
            startDate, startTime, 
            endDate, endTime, location, form
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
                    <span className='col-lg my-3'>
                        <input
                            type="button"
                            onClick={this.onOpenModal}
                            className={`rounded-pill ${styles["apply-btn"]}`}
                            value="APPLY NOW!"
                            aria-label="Send"
                        />
                        <Modal 
                            open={open} 
                            onClose={this.onCloseModal}
                            center
                            styles={{
                                modal: {
                                    animation: `${
                                    open ? styles.customEnterAnimation : styles.customLeaveAnimation
                                    } 500ms`,
                                },
                            }}>
                                <h2>Pup up contents here</h2>
                        </Modal>
                    </span>
                    : null
                }
            </section>
        );
    }
}

export default Gallery;