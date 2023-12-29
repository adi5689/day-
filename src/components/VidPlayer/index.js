import React from "react";
import "./vidplayer.css";

const VidPlayer = () => {

  return (
    <div className="vidplayer">
      <div className="vid-container">
        <h1>Use headphones please🎧</h1>
        <img className="img" src="https://i.postimg.cc/TYB3F3sQ/IMG20211119202332.jpg" alt="img"/>
        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
        <iframe
          src="https://www.opendrive.com/player/MTJfMTkzMzE3MzNfQU1uWTg"
          height="35"
          width="382"
          style={{border:0}}
          scrolling="no"
          frameborder="0"
          allowtransparency="true"
        ></iframe>
      </div>
      <div className="home-btn4">
        <a href="/">Back Home</a>
      </div>
    </div>
  );
};

export default VidPlayer;
