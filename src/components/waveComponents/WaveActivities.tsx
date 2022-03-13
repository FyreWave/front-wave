const activities = [
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
];

const WaveActivities = () => {
  return (
    <div>
      <div className="pt-4">
        <div className="activities">
          {activities.map((activity) => {
            return (
              <div className="text-base font-regular py-2">
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

                <div className="text-xs text-gray-400">{activity.date}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WaveActivities;
