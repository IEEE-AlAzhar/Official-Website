import React, { Component }  from 'react'
import {Link} from 'react-router-dom'
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import
 {   faMapMarkerAlt,
     faCalendarCheck ,
     faClock ,
     faCalendarTimes
  } from "@fortawesome/free-solid-svg-icons";

class EventCard extends Component{ 

  render(){
  
    const {event} = this.props ;
     return (
           <section className={styles["event-card_content"]}>
              <figure className={styles["events-card_cover"]} key={event}>
                  <Link to={'/' + event.id}>
                      <img  
                        alt={`event ${event.title}`}
                        src={event.cover}
                        key={event.id} 
                        />
                  </Link>
                  <p className={styles['activ-upcoming_event']}>
                    {event.status === "upcoming"?<div>
                     <FontAwesomeIcon icon={faClock}
                        className={styles["activ-upcoming-event_icon"]}/></div>: ''}
                  </p>
                  <figcaption >
                      <h3>
                        <Link to={'/' + event.id} className={styles["event-card_title"]}>
                          {event.title}
                          </Link>
                      </h3>
                      <p className={styles["event-card_description"]}>
                          {event.description}
                      </p>
                  </figcaption>
              </figure>
              <section className={styles["event-card_SubDescription"]}>
                 <div className={styles["event-card-SubDescription_content"]} >
                    <div className={styles["event-card-SubDescription_info"]}>
                         <FontAwesomeIcon icon={faCalendarCheck } 
                            className={styles["event-card_icon"]} />        
                          <span> {event.startDate}</span>
                     </div>
                        <div className={styles["event-card-SubDescription_info"]}>
                          {event.location.length ? (<>
                            <FontAwesomeIcon  icon={faMapMarkerAlt}
                              className={styles["event-card_icon"]} /> 
                            <span>{ event.location}</span>
                               </>
                          ) : ( <> 
                             <FontAwesomeIcon  icon={ faCalendarTimes}
                             className={styles["event-card_icon"]} /> 
                            <span>{event.endDate}</span> </> ) }
                      </div>
                   </div>
                </section>
            </section>
         )
    }
}
 
export default EventCard ;
 
