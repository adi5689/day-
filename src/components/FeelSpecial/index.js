import React from "react";
import "./feelspecial.css";
import { motion } from "framer-motion";

const FeelSpecial = () => {

  const containerVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
  };

  const iframeVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.div 
      className="feel-special"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="feel-container">
        <div className="tex-sec">
          <h1>
            So, its kind of a remainder video as to what I mean why I say its
            always "US"!
          </h1>
        </div>
        <div className="max-width1">
          <motion.div
            id="som-player"
            className="som-embed-player"
            data-id="c0l3YdVHYTt"
            variants={iframeVariants}
          >
            <script src="https://screenpal.com/player/appearance/c0l3YdVHYTt"></script>

            <motion.iframe
              height="100%"
              width="100%"
              style={{ border: 0 }}
              scrolling="no"
              src="https://screenpal.com/player/c0l3YdVHYTt?width=100%&height=100%&ff=1&title=0"
              allowfullscreen="true"
            ></motion.iframe>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeelSpecial;
