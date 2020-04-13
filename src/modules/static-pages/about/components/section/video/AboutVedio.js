import React, { Component } from "react";
import { Player, BigPlayButton } from 'video-react';
import 'video-react/dist/video-react.css'; 
import video from "../assets/anmy.mp4";

import "./video.css";

export default class AboutVideo extends Component {
  
  render() {
  
     return (
         <div>
            <Player src={video}>
               <BigPlayButton position="center" />
            </Player>
         </div>
           )    
        };
  }

