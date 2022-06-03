import { Component } from "react";
import { useParams } from "react-router-dom";
import { $axios } from "../../http/http.Service";
import { WavesMemberTypings } from "../../types/modelsTypings";

const WaveMembers = (props: any) => {
  const wavers = props.wavers;

  return (
    <div className="text-white bg-red-500">
      <h1 className="">All users here</h1>
      <div>
        {wavers.map((wave: any, index: number) => (
          <div key={index}>
            {/* <div>{JSON.stringify(wave.user?.username)}</div> */}
            <div>{wave.user?.username}</div>
          </div>
        ))}
      </div>

      <div>{wavers.length !== 0 && <div>No members yet</div>}</div>
    </div>
  );
};

export default WaveMembers;
