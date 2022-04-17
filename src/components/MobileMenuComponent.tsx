import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function MobileMenuComponent(props: any) {
  const isOpen = props.isOpen;
  const children = props.children;
  const onClose = props.onClose;

  return (
    <>
      <div className="bg-secondary-500 w-[500px] h-full">
        <button onClick={onClose}>
          <i className="fas fa-times text-4xl p-2 text-white"></i>
        </button>
        <div className="text-white">
          <div className="flex flex-col p-4">
            <NavLink to="/">Home</NavLink>
            <Link to="/create">Create</Link>
            <NavLink to="/create">All Waves</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
