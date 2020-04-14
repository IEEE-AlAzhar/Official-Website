import React, { Component } from 'react' 
import styles from "./style.module.css";

export default   class Intro extends Component {
    render(){
        const {title ,subtitle } =this.props
        return ( 
            <header  className={styles["intro-header_section"]}>
                <div  className={styles["intro-header_overlay"]}></div>
                 <div className="container">
                    <h1 className={styles["intro-header_heading"]}>{title}</h1>
                    <p className={styles["intro-header_subtitle"]}> {subtitle}</p>
                </div>
          </header>
        );
    } 
}
