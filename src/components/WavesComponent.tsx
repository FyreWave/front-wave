import { useState, useEffect } from "react";
import WaveList from "./WaveList";
import { WavesDataType } from "../../types/models";

const WavesComponent = () => {
  const [waves, setWaves] = useState([
    {
      title: "Build House for mummy",
      goal: "24,500,000,",
      date: "23/11/2022",
      id: 1,
    },
    {
      title: "Buy Car for Papa",
      goal: "12,000,000",
      date: "23/10/2022",
      id: 2,
    },
    {
      title: "Estate Development",
      goal: "30,000,000",
      date: "01/11/2023",
      id: 2,
    },
    {
      title: "My wedding",
      goal: "3,000,000",
      date: "",
      id: 1,
    },
    {
      title: "Dubai trip with friends",
      goal: "7,500,000",
      date: "04/11/2022",
      id: 1,
    },
  ] as WavesDataType[]);

  const handleDelete = (index: any) => {
    const newWaves = waves.filter((wave, i) => i !== index);
    setWaves(newWaves);
    console.log(index);
  };

  useEffect(() => {
    console.log("use effect ran", waves);
  }, [waves]);

  return (
    <div className="">
      <WaveList waves={waves} title="All Waves" handleDelete={handleDelete} />
    </div>
  );
};

export default WavesComponent;
