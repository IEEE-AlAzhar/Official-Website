import React, { Component }  from 'react'
import { getEvents } from "./../../services/events.service";
import {Link} from 'react-router-dom'
import styles from "./style.module.css";
import EventCard from "../eventCard"
 

class EventSction extends Component{ 
  state = {
    events : []
  } 
  componentDidMount(){
    getEvents().then(response => {
        console.log(response)
        this.setState({events : response.data.slice(0,3)})  } )
  }
  render(){
    const {events} = this.state ;
    const EventsList = events.length ? events.map( eventsCard => {
      return (
        <div  key={eventsCard.id} className="col-lg-4 col-md-6 col-sm-6" >
                 <EventCard events={eventsCard}  />
        </div>)
       }) :
   (<div className='center'> loading.... </div> ) 
    return (
      <section className={styles["event-card_section"]}>
         <div className="container">
            <h4 className="section_heading">our events</h4>
            <div className="row">     
               {EventsList}
             </div>
                <div className="row">
                 <Link to='/events' 
                       className={styles["event-section_button"]}>
                    discover our events</Link>
             </div>
          </div>    
      </section>
    )
  }
}
 
export default EventSction 
 