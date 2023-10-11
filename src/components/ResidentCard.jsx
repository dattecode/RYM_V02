import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/cardCss.css";
import { AnimatePresence, motion } from "framer-motion";

const ResidentCard = ({ resident }) => {
  //state
  const [residentInfo, setResidentInfo] = useState(null);
  const [onStatus, setOnStatus] = useState(false);
  //logic

  const handleStatus = () => {
    setOnStatus(!onStatus);
  };

  //effect
  useEffect(() => {
    axios
      .get(resident)
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <motion.article 
    className="cardContainer" 
    onClick={handleStatus}
    initial={{scale:0, opacity:0}}
    animate={{scale:1, opacity:1}}
    transition={{duration:0.4}}
    whileHover={{scale:1.1}}
    whileTap={{scale:1.05}}
    >
      <section className="imgContainer">
        <img src={residentInfo?.image} className="isImg" />
        <AnimatePresence>
          {onStatus ? (
            <motion.div
              className="statusContainer"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.1 }}
              transition={{ duration: 0.3 }}
              key={resident}
            >
              <div className={`test ${residentInfo?.status}`}></div> <p>{residentInfo?.status}</p>
            </motion.div>
          ) : (
            ""
          )}
        </AnimatePresence>
      </section>
      <h2 className="nameResident">{residentInfo?.name}</h2>
      <section className="descriptionContainer">
        <p>
          Species:  <strong> {residentInfo?.species}</strong>
        </p>
        <p>
          Origin:  <strong> {residentInfo?.origin.name}</strong>
        </p>
        <p>
          Time Appear:  <strong> {residentInfo?.episode.length} time</strong>
        </p>
      </section>
    </motion.article>
  );
};

export default ResidentCard;
