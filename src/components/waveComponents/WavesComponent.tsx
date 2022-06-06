import WaveList from "./WaveList";
import useFetch from "../../libs/useFetch";
import { $axios } from "../../http/http.Service";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const WavesComponent = (props: any) => {
  const waves = props.waves;

  return (
    <div>
      {waves && (
        <div>
          <div className="flex justify-between">
            <h1 className="regular-title">Your Waves ({waves.length})</h1>
            {waves.length !== 0 && (
              <div>
                <Link to="/all-waves">
                  <span className="font-medium py-4">
                    {" "}
                    See All Waves{" "}
                    <i className="fa-solid fa-arrow-right-long"></i>{" "}
                  </span>
                </Link>
              </div>
            )}
          </div>
          <hr />
          <WaveList waves={waves} title="Your Waves" />
        </div>
      )}
    </div>
  );
};

export default WavesComponent;
