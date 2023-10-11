import React, { useState } from "react";
import "../styles/rymCss.css";
import RYM from "../gif/rym_px.gif";
import { AnimatePresence, motion } from "framer-motion";

const Rym = () => {
  const [phrase, setPhrase] = useState(false);

  const randomPhrase = (arr) => {
    const arrNum = arr.length;
    const numEnd = Math.floor(Math.random() * arrNum);
    return arr[numEnd];
  };

  const handleClickRYM = () => {
    setPhrase(true);
    const timerRym = setTimeout(() => {
      setPhrase(false);
    }, 8000);
    return () => {
      clearInterval(timerRym);
    };
  };

  const rickQuotes = [
    "Wubba lubba dub dub!",
    "You're young, you have your whole life ahead of you, and your anal cavity is still taut yet malleable.",
    "Don't be a Jerry.",
    "I'm not arguing, I'm just explaining why I'm right.",
    "To live is to risk it all. Otherwise, you're just an inert chunk of randomly assembled molecules drifting wherever the universe blows you.",
    "Morty, do you know what 'Wubba lubba dub dub' means? It means I am in great pain. Please help me.",
    "Sometimes science is a lot more art than science. A lot of people don't get that.",
    "I'm not a hero. I'm a high-functioning sociopath. Merry Christmas.",
    "Nobody exists on purpose, nobody belongs anywhere, everybody's gonna die. Come watch TV.",
    "There is no god, in your face!",
  ];

  return (
    <div className="containerRYM">
      <AnimatePresence>
        {phrase && (
          <motion.p
            className="phraseRYM"
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
          >
            {randomPhrase(rickQuotes)}
          </motion.p>
        )}
      </AnimatePresence>
      <motion.img 
      src={RYM} onClick={handleClickRYM} 
      className="RYMC"
      whileHover={{scale:1.1}}
      />
    </div>
  );
};

export default Rym;
