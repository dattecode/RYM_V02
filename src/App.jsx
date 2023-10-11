import axios from "axios";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import ResidentList from "./components/ResidentList";
import { SearchLocation } from "./components/SearchLocation";
import { randomLocation } from "./utils/randomDimension";
import Dimension from "./components/Dimension";
import Load from "./components/Load";
import { AnimatePresence } from "framer-motion";
import Alone from "./components/Alone";
import Rym from "./components/Rym";

function App() {
  //state
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  //logic
  const fetchDimension = (id) => {
    const URL = `https://rickandmortyapi.com/api/location/${id}`;
    setLocation(null);
    axios
      .get(URL)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let sData = e.target.sData.value.replace(/[^0-9]/g, "");
    if (sData === "") {
      sData = 1;
    }
    if (sData > 126) {
      sData = 1;
    }
    fetchDimension(sData);
  };

  //effect
  useEffect(() => {
    const lr = randomLocation();
    fetchDimension(lr);
  }, []);

  useEffect(() => {
    setLoading(true);
    const timerLoad = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => {
      clearInterval(timerLoad);
    };
  }, [location]);

  return (
    <main className="mainContainer">
      <AnimatePresence>{loading && <Load />}</AnimatePresence>
      <SearchLocation handleSubmit={handleSubmit} />
      <Dimension location={location} />
      <Rym/>
      {location?.residents.length !== 0 ? (
        <ResidentList residents={location?.residents ?? []} />
      ) : (
        <Alone />
      )}
    </main>
  );
}

export default App;
