import { useState, useEffect } from "react";
import WaveList from "./WaveList";
import { WavesDataType } from "../../types/models";

const WavesComponent = () => {
  const [waves, setWaves] = useState([] as WavesDataType[]);

  const handleDelete = (index: any) => {
    const newWaves = waves.filter((wave, i) => i !== index);
    setWaves(newWaves);
    console.log(index);
  };

  useEffect(() => {
    fetch("http://localhost:5100/waves").then((res) => {
      res.json().then((data) => {
        console.log(data);
        setWaves(data);
      });
    });
    console.log("use effect ran", waves);
  }, []);

  return (
    <div className="">
      {waves && (
        <WaveList waves={waves} title="All Waves" handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default WavesComponent;
