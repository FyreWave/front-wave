import {
  decrement,
  increment,
  incrementByAmount,
  toggleMenu,
} from "../redux/counter";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const ReduxTestComponents = () => {
  const count = useSelector((state: RootState) => state.counter.counter);
  const menuState = useSelector((state: RootState) => state.counter.menuState);
  const username = useSelector((state: RootState) => state.counter.username);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux Test Components</h1>

      <div>
        <h1>The count is : {count}</h1>
        <h1>Menu State : {menuState}</h1>

        {menuState && (
          <div className="bg-red-500 p-2"> {username}hide/show</div>
        )}
        <button
          className="regular-button"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="regular-button"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button
          className="regular-button"
          onClick={() => dispatch(incrementByAmount(22))}
        >
          by 33
        </button>
        <button
          className="regular-button"
          onClick={() => dispatch(toggleMenu())}
        >
          menu
        </button>
      </div>
    </div>
  );
};

export default ReduxTestComponents;
