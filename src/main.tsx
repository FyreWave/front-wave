import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Views/App";
import "./styles/App.css";

import SideBar from "./components/SideBar";
import HeaderNavigation from "./Layout/HeaderNavigation";
import FooterArea from "./Layout/FooterArea";

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <div className="flex">
        <div className="w-[400px] hidden lg:block">
          <div className="">
            <SideBar />
          </div>
        </div>
        <div className="w-screen">
          <div className=" container mx-auto">
            <HeaderNavigation />
            <div className="px-6">
              <App />
            </div>
          </div>
        </div>
      </div>

      <FooterArea />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
