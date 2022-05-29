import { Component } from "react";
import { ActivityType } from "../../types/modelsTypings";

interface StateType {
  activities: ActivityType[];
}

class WaveActivities extends Component<any, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      activities: [
        {
          name: "e-money",
          amount: "345,000",
          type: "deposited",
          date: "25-12-2022",
        },
        {
          name: "Nelson fundzbag",
          amount: "",
          type: "initiated a withdrawal",
          date: "25-12-2022",
        },
        {
          name: "Williams Uchendu",
          type: "deposited",
          amount: "23,000",
          date: "25-12-2022",
        },
        {
          name: "Sam Nmeje",
          type: "invited",
          invitee: "sandra",
          date: "25-334-2023",
        },
      ],
    };
  }

  componentDidMount() {
    console.log(this.props, "i loaded");
  }

  render() {
    const { activities } = this.state;

    return (
      <div>
        <div>
          <div className="h-[800px] p-10">
            <div>
              <div className=" border-b-2">
                <h4 className="text-secondary-500 text-3xl">Wave Activities</h4>
              </div>
              <div className="pt-4">
                <div className="activities">
                  {activities.map((activity, index) => (
                    <div key={index} className="text-base font-regular py-2">
                      <div className="activity-name">
                        {activity.name}{" "}
                        <span className="text-secondary-800 italic">
                          {activity.type}
                        </span>{" "}
                        {activity.invitee}
                        <span className="text-primary-500 font-bold">
                          {activity.amount}
                        </span>
                      </div>

                      <div className="text-xs text-gray-400">
                        {activity.date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WaveActivities;
