import React, { Component } from 'react' 
import styles from "./style.module.css";

export default   class Intro extends Component {
    render(){
        const {title ,subtitle } =this.props
        return ( 
            <header  className={styles["intro-header"]}>
                <div  className={styles["intro-overlay"]}></div>
                 <div className="container">
                    <h1 className={styles["intro-header-heading"]}>{title}</h1>
                    <p className={styles["intro-header-subtitle"]}> {subtitle}</p>
                </div>
          </header>
        );
    } 
}
