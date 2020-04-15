import React, { Component } from "react";
import { Player, BigPlayButton } from "video-react";
import poster from "assets/images/postar.jpeg";
import "video-react/dist/video-react.css";
import video from "assets/video/anmy.mp4";

export default class AboutVideo extends Component {
  render() {
    return (
      <div>
        <Player src={video} poster={poster} preload="metadata">
          <BigPlayButton
            position="center"
            tabindex="0"
            data-state="play"
            aria-label="Play button"
          />
        </Player>
      </div>
    );
  }
}
