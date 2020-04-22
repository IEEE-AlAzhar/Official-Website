import React, { Component } from "react";
import Layout from "shared/layout";
import Gallery from './components/Gallery/Gallery';
import EventDetails from './components/EventDetails/EventDetails';
import { getEvents } from '../../services/events.service';
import styles from './style.module.css'


class SingleEventPage extends Component {
  constructor() {
    super();
    this.state = {
      event: {}
    }
  }

  componentDidMount = () => {
    const { match, history } = this.props
    getEvents()
    .then(response => {
      const event = response.data.find(event => event.id === match.params.id)
      if(!event){
        history.push('/events')
      }
      this.setState({ event })
    })
    .catch(console.log);
  }

  
  render() {
    const { 
      title, cover, description, images, 
      status, startDate, endDate, location,
      startTime, endTime, form
    } = this.state.event

    return (
      <Layout>
        <div className='text-center'>
          <header className='pt-3'>
            <h1 className='my-5'>{title}</h1>
          </header>
          <img className={`w-100 ${styles['event-cover']}`} src={cover} alt='' />
          <div className='container'>
            {
              status === 'upcoming' ?
              <EventDetails details = {{ 
                startDate, 
                startTime, 
                endDate, 
                endTime, 
                location, 
                form,
                cover
                }} />
              : null
            }
            <div>
              <article className='my-5 text-left'>
                {description}
              </article>
              {
                images ?
                <Gallery images={images} />
                :null
              }
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default SingleEventPage;

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
