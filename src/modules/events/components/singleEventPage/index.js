import React, { Component } from "react";
import Layout from "shared/layout";
import Gallery from './components/Gallery/Gallery'
import { getEvents } from '../../services/events.service'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import styles from './style.module.css'


class SingleEventPage extends Component {
  constructor() {
    super();
    this.state = {
      event: {}
    }
  }

  componentDidMount = () => {
    getEvents()
    .then(response => {
      const event = response.data.find(event => event.id === this.props.match.params.id)
      this.setState({ event })
    })
    .catch(console.log);
  }

  
  render() {
    const { 
      title, cover, description, images, 
      status, startDate, endDate, location 
    } = this.state.event
    return (
      <Layout>
        <div className='text-center'>
          <header className='pt-3'>
            <h1 className='my-5'>{title}</h1>
          </header>
          <img className={`w-100 ${styles['event-cover']}`} src={cover} alt='' />
          <div className='container'>
            <section className='row'>
              <span className='col'>
                <svg className={`bi bi-calendar ${styles.icons}`} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" clipRule="evenodd"/>
                  <path fillRule="evenodd" d="M6.5 7a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                </svg>
                <span>{startDate}</span>
              </span>
              <span className='col'>
                <svg className={`bi bi-calendar-fill ${styles.icons}`} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 2a2 2 0 012-2h12a2 2 0 012 2H0z"/>
                  <path fillRule="evenodd" d="M0 3h16v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm6.5 4a1 1 0 100-2 1 1 0 000 2zm4-1a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 100-2 1 1 0 000 2zm-8 2a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 100-2 1 1 0 000 2zm4-1a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 100-2 1 1 0 000 2zm-8 2a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 100-2 1 1 0 000 2zm4-1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd"/>
                </svg>
                <span>{endDate}</span>
              </span>
              <span className='col'>
                <FontAwesomeIcon icon={faMapMarkerAlt}  size="2x" />
                <span>{location}</span>
              </span>
            </section>
            <div>
              <article className='my-5 text-left'>
                {description}
              </article>
              <Gallery images={images} />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default SingleEventPage;

//   "startDate": "07-05-2020",
//   "endDate": "07-06-2020",
//   "location": "Egypt, Cairo",
//   "status": "upcoming",
//   "form": {
//     "postTarget": "/events/2",
//     "fields": [
//       {
//         "type": "text",
//         "name": "name",
//         "rule": {
//           "required": true,
//           "max": 17
//         }
//       },
//       {
//         "type": "number",
//         "name": "age",
//         "rule": {
//           "required": true,
//           "max": 2,
//           "min": 0
//         }
//       },
//       {
//         "type": "select",
//         "name": "select",
//         "options": ["option 1", "option 2", "option 3", "option 4"],
//         "rule": {
//           "required": true
//         }
//       },
//       {
//         "type": "textarea",
//         "name": "message",
//         "rule": {
//           "max": 240
//         }
//       }
//     ]
//   }
