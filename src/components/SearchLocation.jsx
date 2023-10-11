import React from "react";
import "../styles/searchCss.css";
import vortex from "../img/vortex.png";
import ryct from "../img/rymTitleImg.png";
import { motion } from "framer-motion";

export const SearchLocation = ({ handleSubmit }) => {
  //animate

  return (
    <section className="searchContainer">
      <div className="titlePag">
        <motion.img
          src={vortex}
          className="vortex"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <img src={ryct} className="rymt" />
      <form onSubmit={handleSubmit} autoComplete="off" className="formS">
        <input
          type="text"
          placeholder="Id dimension."
          defaultValue={1}
          name="sData"
          id="sData"
          className="inputS"
        />
        <button type="submit" className="btnS">
          Search
        </button>
      </form>
    </section>
  );
};
