import moment from "moment";
import { Component } from "react";
import { ActivityType } from "../../types/modelsTypings";

const WaveActivities = (props: any) => {
  const activities = props.activities;

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
                {JSON.stringify(activities)}

                {activities.map((activity: any, index: number) => (
                  <div key={index} className="text-base font-regular py-2">
                    <div className="activity-name">
                      {activity.user?.username}{" "}
                      <span className="text-secondary-800 italic">
                        {activity.action}
                      </span>{" "}
                      {activity.invitee}
                      <span className="text-primary-500 font-bold">
                        {activity.amount}
                      </span>
                    </div>

                    <div className="text-xs text-gray-400">
                      {moment(activity.createdAt).fromNow()}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>{activities.length === 0 && <div>No Activities yet</div>}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaveActivities;
