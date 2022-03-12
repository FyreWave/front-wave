import { useState, useEffect } from "react";
import WaveList from "./WaveList";
import { WavesDataType } from "../../types/models";

const WavesComponent = () => {
  const [waves, setWaves] = useState([] as WavesDataType[]);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  const handleDelete = (index: any) => {
    const newWaves = waves.filter((wave, i) => i !== index);
    setWaves(newWaves);
    console.log(index);
  };

  useEffect(() => {
    fetch("http://localhost:5100/waves")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not connect to server anymore");
        }
        return res.json();
      })
      .then((data) => {
        setWaves(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
        console.log(err.message);
      });
  }, []);

  return (
    <div className="">
      {error && <div>{error}</div>}
      {isLoading && <div>Is loading...</div>}
      {waves && (
        <WaveList waves={waves} title="All Waves" handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default WavesComponent;
