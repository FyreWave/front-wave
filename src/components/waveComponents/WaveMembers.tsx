import { Component } from "react";
import { useParams } from "react-router-dom";
import { $axios } from "../../http/http.Service";
import { WavesMemberTypings } from "../../types/modelsTypings";

class WaveMembers extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      deposits: [],
    };
  }

  componentDidMount() {
    const { wavers } = this.props;
  }

  render() {
    const { wavers } = this.props;

    console.log(wavers.user, "members");

    return (
      <div className="text-white bg-red-500">
        <h1 className="">All users here</h1>

        {wavers.map((wave: any, index: number) => (
          <div key={index}>
            <div>{JSON.stringify(wave.user.email)}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default WaveMembers;
