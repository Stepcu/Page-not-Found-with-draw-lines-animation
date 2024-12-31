import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

// Animation for drawing lines
const drawLine = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 1.5, bounce: 0, repeat: Infinity }, // Infinite loop
      opacity: { duration: 0.01 },
    },
  },
};

// 404 Page Component
const PagenotFound = () => {
  return (
    <div
      className="error-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Full-screen height
        flexDirection: "column", // Stack items vertically
        color: "#FFFBFB", // White text
      }}
    >
      {/* Animated "X" using SVG */}
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        initial="hidden"
        animate="visible"
        style={{ marginBottom: "40px" }} // Space between the "X" and text
      >
        {/* First Line of the "X" */}
        <motion.line
          x1="30"
          y1="30"
          x2="170"
          y2="170"
          stroke="#FFB02E" // Yellow stroke
          strokeWidth="25" // Thick line
          variants={drawLine}
        />
        {/* Second Line of the "X" */}
        <motion.line
          x1="170"
          y1="30"
          x2="30"
          y2="170"
          stroke="#FFB02E" // Yellow stroke
          strokeWidth="25"
          variants={drawLine}
        />
      </motion.svg>

      {/* Animated Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Starts slightly below and invisible
        animate={{ opacity: 1, y: 0 }} // Fades in and moves to position
        transition={{ duration: 1, delay: 0.5 }} // Faster animation with slight delay
        style={{ textAlign: "center" }}
      >
        <h1 style={{ fontSize: "72px", margin: 0, color: "#FFB02E" }}>404</h1> {/* Large header for the error code */}
        <p style={{ fontSize: "28px", margin: 0, color: "#FFFBFB" }}>PAGE NOT FOUND</p> {/* Subtext */}
      </motion.div>
    </div>
  );
};

export default PagenotFound;
