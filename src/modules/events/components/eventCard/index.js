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
    const EventsList = events.length ? events.map( eventsCard => {

    return(   
        <div  key={eventsCard.id} className="col-lg-4 col-md-6 col-sm-6" >
          <div className={styles["event-card_content"]}>
                <figure className={styles["events-card_cover"]} key={eventsCard}>
                 <Link to={'/' + eventsCard.id}>
                  <img  
                    alt={eventsCard.title}
                    src={eventsCard.cover}
                    key={eventsCard.id} 
                    />
                  </Link>
                  <p className={styles['activ-upcoming_event']}>
                    {eventsCard.status === "upcoming"?<div>
                     <FontAwesomeIcon icon={faClock}
                        className={styles["activ-upcoming-event_icon"]}/></div>: ''}
                  </p>
                  <figcaption >
                    <h3>
                      <Link to={'/' + eventsCard.id} className={styles["event-card_title"]}>
                        {eventsCard.title}
                        </Link>
                    </h3>
                    <p className={styles["event-card_description"]}>
                        {eventsCard.description}
                    </p>
                  </figcaption>
              </figure>
                <div class={styles["event-card_footer"]}>
                 <div className={styles["event-card-footer_content"]} >
                    <div className={styles["event-card-footer_info"]}>
                         <FontAwesomeIcon icon={faCalendarCheck } 
                                    className={styles["event-card_icon"]} />        
                          <span> {eventsCard.startDate}</span>
                     </div>
                        <div className={styles["event-card-footer_info"]}>
                          <FontAwesomeIcon  icon={faMapMarkerAlt}
                                className={styles["event-card_icon"]} /> 
                            <span>{eventsCard.location}</span> 
                        </div>
                  </div>
                </div>
          </div>
        </div> )
 }) : (
         <div className='center'> loading.... </div> )
    return (
             <div className="row">
                {EventsList}
            </div>
     )
  }
}
 
export default EventCard ;
 