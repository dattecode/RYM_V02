import React from "react";
import "../styles/dimensionCss.css";

const Dimension = ({ location }) => {
  return (
    <section className="dmsContainer">
      <h3 className="tiDms">¡Wellcome to {location?.name}!</h3>
      <ul className="desDms">
        <li>
          type: <strong>{location?.type}</strong>
        </li>
        <li>
          dimension: <strong>{location?.dimension}</strong>
        </li>
        <li>
          population: <strong>{location?.residents.length}</strong>
        </li>
      </ul>
    </section>
  );
};

export default Dimension;
