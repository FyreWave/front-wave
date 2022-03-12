import { useState, useEffect } from "react";
import WaveList from "./WaveList";
import { WavesDataType } from "../types/models";
import useFetch from "../libs/useFetch";

const WavesComponent = () => {
  const {
    data: waves,
    isError,
    isLoading,
  } = useFetch("http://localhost:5100/waves");

  return (
    <div className="">
      {isError && <div>{isError}</div>}
      {isLoading && <div>Is loading...</div>}
      {waves && <WaveList waves={waves} title="All Waves" />}
    </div>
  );
};

export default WavesComponent;
