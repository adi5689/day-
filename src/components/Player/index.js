import React from "react";
import "./player.css";

const MuzicPlayer = () => {
  return (
    <div>
      <h1 className="player-heading">Play the song babe!</h1>
      <div className="player">
      {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/6BirLItaTffBCKTAeWi3gT?utm_source=generator"
          width="100%"
          height="252"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <h1 className="player-heading">Dont scroll till the song ends. 😉</h1>
    </div>
  );
};

export default MuzicPlayer;
