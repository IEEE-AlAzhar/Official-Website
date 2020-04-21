import React, { Component } from "react";
import Layout from "shared/layout";
import Gallery from './components/Gallery/Gallery'
import { getEvents } from '../../services/events.service'
import styles from './style.module.css'


export default class SingleEventPage extends Component {
  constructor() {
    super();
    this.state = {
      event: {}
    }
  }

  componentDidMount = () => {
    getEvents()
    .then(response => {
      this.setState({ event: response.data.find(event => event.id === this.props.match.params.id) })
    })
    .catch(console.log);
  }

  
  render() {
    const { title, cover, description, images } = this.state.event
    return (
      <Layout>
        <div className='text-center'>
          <header className='pt-3'>
            <h1 className='my-5'>{title}</h1>
          </header>
          <img className={`w-100 ${styles['event-cover']}`} src={cover} alt='' />
          <div className='container'>
            <article className='my-5 text-left'>
              {description}
            </article>
            <Gallery images={images} />
          </div>
        </div>
      </Layout>
    );
  }
}

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
