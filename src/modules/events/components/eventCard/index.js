import React, { Component }  from 'react'
import {Link} from 'react-router-dom'
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import
 {   faMapMarkerAlt,
     faCalendarCheck ,
     faClock
  } from "@fortawesome/free-solid-svg-icons";

class EventCard extends Component{ 

  render(){
  
    const {events} = this.props ;

    return (
           <div className={styles["event-card_content"]}>
              <figure className={styles["events-card_cover"]} key={events}>
                  <Link to={'/' + events.id}>
                      <img  
                        alt={`event ${events.title}`}
                        src={events.cover}
                        key={events.id} 
                        />
                  </Link>
                  <p className={styles['activ-upcoming_event']}>
                    {events.status === "upcoming"?<div>
                     <FontAwesomeIcon icon={faClock}
                        className={styles["activ-upcoming-event_icon"]}/></div>: ''}
                  </p>
                  <figcaption >
                      <h3>
                        <Link to={'/' + events.id} className={styles["event-card_title"]}>
                          {events.title}
                          </Link>
                      </h3>
                      <p className={styles["event-card_description"]}>
                          {events.description}
                      </p>
                  </figcaption>
              </figure>
              <div class={styles["event-card_footer"]}>
                 <div className={styles["event-card-footer_content"]} >
                    <div className={styles["event-card-footer_info"]}>
                         <FontAwesomeIcon icon={faCalendarCheck } 
                                    className={styles["event-card_icon"]} />        
                          <span> {events.startDate}</span>
                     </div>
                        <div className={styles["event-card-footer_info"]}>
                          <FontAwesomeIcon  icon={faMapMarkerAlt}
                                className={styles["event-card_icon"]} /> 
                            <span>{events.location}</span> 
                      </div>
                  </div>
                </div>
            </div>
         )
    }
}
 
export default EventCard ;
 
