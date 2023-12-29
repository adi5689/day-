import React, { useEffect, useRef } from "react";
import "./vidplayer2.css";


const VidPlayer2 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const playVideo = () => {
      if (videoElement) {
        // Use postMessage to send a play command to the iframe
        videoElement.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      }
    };

    // Add an event listener to play the video when it comes into view
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          playVideo();
        }
      });
    };

    // Use IntersectionObserver to check when the component is in view
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as needed
    });

    observer.observe(videoElement);

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="vidplayer2">
      <div className="vid-container2">
      {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
        <iframe
          ref={videoRef}
          width="100%"
          height="100%"
          src="https://screenpal.com/player/c0l3YdVHYTt?width=100%&height=100%&ff=1&title=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VidPlayer2;
