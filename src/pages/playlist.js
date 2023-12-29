import React from "react";
import "../components/CredExperience/credExperience.css";

const PlayList = () => {
  return (
    <div className="playlist">
      <div>
        <div className="photo-section-heading cred-exp-heading">Playlist</div>
        <div className="photo-section-subheading">
          So here's a playlist with the songs that remind me of you.....always!
        </div>
        <div className="photo-section-desc cred-exp-desc">
          Just go through this whenever you feel like you&apos;re missing me.
        </div>
        <div className="home-btn2">
            <a href="/">
                Back home
            </a>
        </div>
      </div>
      <div>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/2hmS11z4BglO1eiRdWEjGD?utm_source=generator"
          width="100%"
          height="1200"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      
    </div>
  );
};

export default PlayList;
