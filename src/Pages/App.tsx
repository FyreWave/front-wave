import WavesComponent from "../components/WavesComponent";
import DepositHistoryComponent from "../components/DepositHistoryComponent";
import {
  Link,
  Route,
  Switch,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import HomeDashboard from "./HomeDashboard";
import SideBar from "../components/SideBar";
import HeaderNavigation from "../Layout/HeaderNavigation";
import CreateWavePage from "./createWavePage";
import FooterArea from "../Layout/FooterArea";
import React from "react";
import WaveDetailsPage from "./WaveDetailsPage";
import NotFoundPage from "./NotFoundPage";
import RegisterPage from "./RegisterPage";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      <div className="flex">
        <div className=" hidden">
          <div className="">
            <SideBar />
          </div>
        </div>
        <div className="w-screen">
          <div className="">
            <p>tdyguhi {pathname}</p>
            <HeaderNavigation />
            <div className="">
              <Switch>
                <Route exact path="/">
                  <HomeDashboard />
                </Route>
                <Route path="/create">
                  <CreateWavePage />
                </Route>
                <Route path="/register">
                  <RegisterPage />
                </Route>
                <Route path="/view-wave/:id">
                  <WaveDetailsPage />
                </Route>
                <Route path="*">
                  <NotFoundPage />
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
