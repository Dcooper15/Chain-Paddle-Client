import React, { useState } from "react";
import {
  SectorMenuHome,
  MenuRow,
  StyledLink,
  SectorContainer,
  HomeMenuItemContainer,
  //HomeMenuItemIconContainer,
  HomeMenuItemContainerDisabled,
  //HomeMenuItemIconContainerDisabled,
} from "../Styles/styledElements";
//import { useStyles } from "../Styles/muiStyles";

import HomePageComments from "../Comments/HomePageComments";
import SignupLogo from "../Signup/SignupLogo";
import MyOptionsWatchlist from "../Watchlist/MyOptionsWatchlist";
import DiscussionWatchlistButtons from "./DiscussionWatchlistButtons";

const MainMenu = () => {
  const [displayWatchlist, setDisplayWatchlist] = useState(false);

  const handleDiscussionWatchlistChange = () => {
    setDisplayWatchlist(!displayWatchlist);
  };

  return (
    <>
      <SignupLogo />
      <SectorContainer>
        <SectorMenuHome>
          <MenuRow>
            <StyledLink to="/sector">
              {" "}
              <HomeMenuItemContainer>Sectors</HomeMenuItemContainer>
            </StyledLink>
            <StyledLink to="/topmovers">
              {" "}
              <HomeMenuItemContainer>Movers</HomeMenuItemContainer>
            </StyledLink>
          </MenuRow>
          <MenuRow>
            <StyledLink to="/social">
              {" "}
              <HomeMenuItemContainer>Social Media</HomeMenuItemContainer>
            </StyledLink>
            <StyledLink to="/research">
              {" "}
              <HomeMenuItemContainer>Research</HomeMenuItemContainer>
            </StyledLink>
          </MenuRow>
          <MenuRow>
            <StyledLink to="/earnings">
              {" "}
              <HomeMenuItemContainer>Upcoming Earnings</HomeMenuItemContainer>
            </StyledLink>
            <StyledLink to="/">
              {" "}
              <HomeMenuItemContainerDisabled>
                Screener
              </HomeMenuItemContainerDisabled>
            </StyledLink>
          </MenuRow>
        </SectorMenuHome>
      </SectorContainer>
      <DiscussionWatchlistButtons
        displayWatchlist={displayWatchlist}
        handleDiscussionWatchlistChange={handleDiscussionWatchlistChange}
      />
      <HomePageComments isGeneral={true} displayWatchlist={displayWatchlist} />
      <MyOptionsWatchlist displayWatchlist={displayWatchlist} />
    </>
  );
};

export default MainMenu;
