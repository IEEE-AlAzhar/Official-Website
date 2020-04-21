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

<<<<<<< HEAD
    return (
           <div className={styles["event-card_content"]}>
              <figure className={styles["events-card_cover"]} key={events}>
                  <Link to={'/' + events.id}>
                      <img  
                        alt={`event ${events.title}`}
                        src={events.cover}
                        key={events.id} 
                        />
=======
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
>>>>>>> 67b08762ca023f980d1844ea2a3d8c0ec15745ad
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
<<<<<<< HEAD
              <div class={styles["event-card_footer"]}>
=======
               <div class={styles["event-card_footer"]}>
>>>>>>> 67b08762ca023f980d1844ea2a3d8c0ec15745ad
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
 
<<<<<<< HEAD
=======

>>>>>>> 67b08762ca023f980d1844ea2a3d8c0ec15745ad
