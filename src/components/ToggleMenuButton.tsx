import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setUser } from "../redux/user";

const ToggleMenuButton = (props: any) => {
  const isShown = props.isShown;
  const handleClick = props.handleClick;
  // const isShown = props.isShown;

  return (
    <>
      {
        <button className="z-40 text-white" onClick={handleClick}>
          {isShown && <i className="fas fa-times text-4xl p-2"></i>}
          {!isShown && (
            <i className="fas fa-bars text-3xl text-secondary-500"></i>
          )}
        </button>
      }
    </>
  );
};

export default ToggleMenuButton;
