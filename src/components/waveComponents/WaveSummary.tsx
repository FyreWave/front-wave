import moment from "moment";
import { Component } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { $axios } from "../../http/http.Service";
import { WavesMemberTypings } from "../../types/modelsTypings";

class WaveSummary extends Component<any, any> {
  constructor(props: WavesMemberTypings) {
    super(props);
  }

  render() {
    const { wave } = this.props;
    return (
      <div className="">
        <section>
          <div>
            <h1 className="text-white text-2xl font-bold capitalize">
              {wave.waveName}
            </h1>
            <h1 className=" font-bold text-primary-200 font-semibold text-3xl">
              ₦ {wave.targetAmount}
            </h1>

            <progress
              value={wave.balance_percentage}
              max="100"
              className="rounded-full w-full"
            />
            <div className="flex justify-between">
              <p className=" font-bold text-white font-semibold text-lg">
                ₦{wave.targetAmount - wave.balance}
                <span className="font-light"> raised</span>
              </p>
              <p className=" font-bold text-primary-500 font-semibold text-lg">
                {wave.balance_percentage}%
              </p>
            </div>
            <p className="text-white font-bold">
              {moment(wave.dueDate).format("MMM Do YYYY")}
            </p>

            <div className="flex items-center gap-x-4">
              <button className="regular-button my-4">
                Initiate Withdrawal
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default WaveSummary;
