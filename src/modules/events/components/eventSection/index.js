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
    return (
      <section className={styles["event-card_section"]}>
         <div className="container">
            <h4 className="section_heading">our events</h4>
              <EventCard events={this.state.events}  />
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
 