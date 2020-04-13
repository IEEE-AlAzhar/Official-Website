import React, { Component } from "react";
import styles from  "./style.module.css";

import AboutVideo from "./video/index"
import {Link} from 'react-router-dom';


export default class About extends Component {
  render() {
     return (
      <section  className={styles["about-home-section"]}>
         <div  className="container">
           <h2 className={styles["about-home-Heading"]}> About Us</h2>
           <div className="row">
             <div className="col-lg-6"> 
                   <AboutVideo/>
             </div>
            <div className="col-lg-6">
              <div className={styles['about-Info']}>
                <p className={styles["about-home-lead"]} >
                    Was founded in 2012 its dependent to "IEEE EGYPT SECTION" which exists in all universities in Egypt.Our Mission: Raising the Name of Al-Azhar University. Providing the required scientific and practical conditions to prepare 
                    a successful engineer from the students ,
                      so they become able to compete in the labor market.
                </p>
                <Link to='/about-us'>
                    <button className={styles["about-home-button"]}> Read More </button>
                </Link>
              </div>
            </div>
           </div>
         </div>
       </section>
    );
  }
}
