import React, { Component } from 'react' 
import "/style.module.css";

export default   class Intro extends Component {
    render(){
        const {title ,subtitle } =this.props
        return ( 
            <header>
              <div className="jumbotron jumbotron-fluid">
                <div className="overlay"></div>
                    <div className="container">
                    <h1 className="display-3">{title}</h1>
                    <p className="lead"> {subtitle}</p>
                </div>
             </div>
          </header>
        );
    } 
}
