import { useState } from "react";

const HeaderNavigation = () => {
  // let name = "Ezeh";

  const [name, setName] = useState("Ezeh");
  const [amount, setAmount] = useState(123456);

  const handleClick = () => {
    setName("Xammmy");
    setAmount(amount * 2);
  };

  return (
    <div>
      <nav className="border-b-2 py-10">
        <h1 className="text-3xl font-bold">
          Hello {name}, {amount}
        </h1>
      </nav>

      <div className="space-x-4">
        <button className="regular-button" onClick={handleClick}>
          Click Me
        </button>
        <button className="inverse-button" onClick={handleClick}>
          Click Me
        </button>
      </div>
    </div>
  );
};

export default HeaderNavigation;
