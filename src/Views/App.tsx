import WavesComponent from "../components/WavesComponent";
import DepositHistoryComponent from "../components/DepositHistoryComponent";
import { Link, Route, Switch } from "react-router-dom";
import HomeDashboard from "./HomeDashboard";
import SideBar from "../components/SideBar";
import HeaderNavigation from "../Layout/HeaderNavigation";
import CreateWave from "./createWave";
import FooterArea from "../Layout/FooterArea";
import React from "react";

function App() {
  return (
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
              <Switch>
                <Route exact path="/">
                  <HomeDashboard />
                </Route>
                <Route path="/create">
                  <CreateWave />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>

      <FooterArea />
    </div>
  );
}

export default App;
