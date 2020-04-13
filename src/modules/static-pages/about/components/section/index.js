import React, { Component } from "react";
import "/style.module.css";

import AboutVideo from "./video/AboutVedio";
import {Link} from 'react-router-dom';


export default class About extends Component {
  render() {
     return (
      <section className="about-home dark-theme ">
       <div className="container">
         <h2 className='text-center'> About</h2>
           <div className="row">
             <div className="col-lg-6"> 
                   <AboutVideo/>
             </div>
            <div className="col-lg-6">
              <div className='about-Info'>
                <p className="lead">
                    Was founded in 2012 its dependent to "IEEE EGYPT SECTION" which exists in all universities in Egypt.Our Mission: Raising the Name of Al-Azhar University. Providing the required scientific and practical conditions to prepare 
                    a successful engineer from the students ,
                      so they become able to compete in the labor market.
                      Was founded in 2012 its dependent to "IEEE EGYPT SECTION" which exists in all universities in Egypt.Our Mission: Raising the Name of Al-Azhar University. Providing the required scientific and practical conditions to prepare 
                    a successful engineer from the students ,
                      so they become able to compete in the labor market.
                </p>
                <Link to='/about-us'>
                    <button> Read More </button>
                </Link>
              </div>
            </div>
           </div>
         </div>
      </section>
    );
  }
}
