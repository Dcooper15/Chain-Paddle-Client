import React from "react";

import {
  // Route,
  Switch,
  //useHistory
} from "react-router-dom";
import ProtectedRoute from "../auth/protected-route";
import MainTopMovers from "../TopMovers/MainTopMovers";
import MoverStocks from "../TopMovers/MoverStocks";
import FullOptionChain from "../OptionChain/FullOptionChain";
import MainSectors from "../Sectors/MainSectors";
import SectorStocks from "../Sectors/SectorStocks";
import MainSocialSentiment from "../SocialSentiment/MainSocialSentiment";
import TrendingWsb from "../SocialSentiment/TrendingWsb";
import Earnings from "../Earnings/Earnings";
import MainResearch from "../Research/MainResearch";
import Twit from "../SocialSentiment/Twit";
import Profile from "../Profile/profile";

const Routes = () => {
  // let history = useHistory();

  return (
    <>
      <Switch>
        <ProtectedRoute exact path="/sector" component={MainSectors} />

        <ProtectedRoute exact path="/topmovers" component={MainTopMovers} />

        <ProtectedRoute exact path="/social" component={MainSocialSentiment} />

        <ProtectedRoute
          exact
          path="/social/trendingwsb"
          component={TrendingWsb}
        />

        <ProtectedRoute path="/topmovers/:market" component={MoverStocks} />

        <ProtectedRoute path="/chain/:symbol" component={FullOptionChain} />

        <ProtectedRoute path="/sector/:sector" component={SectorStocks} />

        <ProtectedRoute exact path="/earnings" component={Earnings} />

        <ProtectedRoute exact path="/research" component={MainResearch} />

        <ProtectedRoute
          exact
          path="/social/twitterstocktwits"
          component={Twit}
        />
        <ProtectedRoute
          exact
          path="/profile"
          component={Profile}
        />
      </Switch>
    </>
  );
};

export default Routes;
