import React from "react";
import loadG from "../gif/loading.gif";
import "../styles/loadCss.css";
import { AnimatePresence, motion } from "framer-motion";

const Load = () => {
  return (
    <motion.div
      className="containerLoad"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      key={Math.random()}
    >
      <img src={loadG} className="loadG" />
      <h2>L o a d i n g . . .</h2>
    </motion.div>
  );
};

export default Load;
