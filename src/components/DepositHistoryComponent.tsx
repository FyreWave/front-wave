import { useState } from "react";

const DepositHistoryComponent = () => {
  const cardNumber = () => {};

  const number = Math.floor(1000 + Math.random() * 9000);

  cardNumber();

  const [histories, setHistory] = useState([
    {
      title: "Build House for mummy",
      goal: "24,500,000",
      date: "23/11/2022",
      id: 1,
    },
    {
      title: "Buy Car for Papa",
      goal: "12,000,000",
      date: "23/10/2022",
      id: 1,
    },
    {
      title: "Estate Development",
      goal: "30,000,000",
      date: "01/11/2023",
      id: 1,
    },
    {
      title: "My wedding",
      goal: "3,000,000",
      date: "",
      id: 1,
    },
    {
      title: "Dubai trip with friends",
      goal: "7,500,000",
      date: "04/11/2022",
      id: 1,
    },
  ]);
  return (
    <div className="bg-indigo-800">
      <div>
        {histories.map((history, index) => (
          <div key={index}>
            <div className="border-b-2">
              <div className="py-6">
                <div className="flex justify-between">
                  <div>
                    <h1>
                      {number} ***** **** {number}
                    </h1>
                    <h1 className="regular-title text-xs">{history.title}</h1>
                    <p>{history.date}</p>
                  </div>
                  <div>
                    <p>N{history.goal}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepositHistoryComponent;
