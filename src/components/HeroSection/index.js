import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./heroSection.css";

const HeroSection = () => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  const handleButtonClick = () => {
    setOverlayVisible(true);
  };

  const handleCloseOverlay = () => {
    setOverlayVisible(false);
  };

  return (
    <div id="homemain">
      <motion.div
        className="headings"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        <h1>Happy</h1>
        <h1>Birthday</h1>
        <h1>Babe</h1>
      </motion.div>
      <button className="home-btn" onClick={handleButtonClick}>
        <p>कृपया मुझे क्लिक करें</p>
      </button>
      {overlayVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="overlay"
          onClick={handleCloseOverlay}
        >
          <div className="text">
            <p>
              " तेरी धड़कन ही ज़िंदगी का किस्सा है मेरा, <br />
              तू ज़िंदगी का एक अहम् हिस्सा है मेरा..<br />
              मेरी मोहब्बत तुझसे, सिर्फ़ लफ्जों की नहीं है,<br />
              तेरी रूह से रूह तक का रिश्ता है मेरा..!! "
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HeroSection;
