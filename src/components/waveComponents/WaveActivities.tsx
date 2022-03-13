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
    type: "withdrawal",
    date: "25-12-2022",
  },
  {
    name: "Williams Uchendu",
    types: "deposited",

    amount: "23,000",
    date: "25-12-2022",
  },
];

const WaveActivities = () => {
  return (
    <div>
      <div className="pt-4">
        <div className="activities">
          {activities.map((activity) => {
            return (
              <div className="text-xl font-medium py-2">
                <div className="activity-name">
                  {activity.name} {activity.type}{" "}
                  <span className="text-primary-500">{activity.amount}</span>
                </div>

                <div className="text-xs">{activity.date}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WaveActivities;