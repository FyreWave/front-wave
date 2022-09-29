import { Component } from "react";
import { useParams } from "react-router-dom";
import { $axios } from "../../http/http.Service";
import { WavesMemberTypings } from "../../types/modelsTypings";

const WaveMembers = (props: any) => {
  const wavers = props.wavers;

  return (
    <div className="text-primary-500">
      <div className="flex justify-between">
        <div>Waver</div>
        <div>Funds added</div>
      </div>
      <div>
        {wavers.map((wave: any, index: number) => (
          <div key={index}>
            <p>Wave Members</p>
            <div className="flex justify-between text-white">
              <div>{wave.user?.username}</div>
              <div>{wave.amount}</div>
            </div>
          </div>
        ))}
      </div>

      <div>{wavers.length === 0 && <div>No members yet</div>}</div>
    </div>
  );
};

export default WaveMembers;
