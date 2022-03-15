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
    <div className="my-b">
      <div>
        {histories.map((history, index) => (
          <div key={index}>
            <div>
              <div className="py-6">
                <div className="flex justify-between">
                  <div className="flex">
                    <div className="bg-primary-500 p-1 rounded-full w-12 h-12 flex justify-center mr-2">
                      <div className="text-center">
                        <p className="text-lg text-white font-bold">23</p>
                        <p className="text-sm text-white -mt-2">mar</p>
                      </div>
                    </div>
                    <div>
                      <h1>
                        {number} ***** **** {number}
                      </h1>
                      <h1 className="font-semibold text-xs text-gray-500">
                        {history.title}
                      </h1>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold">&#8358;{history.goal}</p>
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
