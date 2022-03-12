import React from "react";
import {
  SectorMenuHome,
  MenuRow,
  StyledLink,
  SectorContainer,
  HomeMenuItemContainer,
  HomeMenuItemIconContainer,
  HomeMenuItemContainerDisabled,
  HomeMenuItemIconContainerDisabled,
} from "../Styles/styledElements";
import {
  AiOutlineBank,
  AiOutlineReddit,
  AiOutlineFileSearch,
  AiOutlineScan,
} from "react-icons/ai";
import { GiCommercialAirplane } from "react-icons/gi";
import { GiElectric } from "react-icons/gi";
import { FiTrendingUp } from "react-icons/fi";
import { IoCalendarSharp } from "react-icons/io5";
import { TiSocialTwitter } from "react-icons/ti";

const MainMenu = () => {
  return (
    <SectorContainer>
      <SectorMenuHome>
        <MenuRow>
          <StyledLink to="/sector">
            {" "}
            <HomeMenuItemContainer>
              Sectors
              <HomeMenuItemIconContainer>
                <AiOutlineBank style={{ padding: "1%" }} />
                <GiCommercialAirplane style={{ padding: "1%" }} />
                <GiElectric style={{ padding: "1%" }} />
              </HomeMenuItemIconContainer>
            </HomeMenuItemContainer>
          </StyledLink>
          <StyledLink to="/topmovers">
            {" "}
            <HomeMenuItemContainer>
              Movers
              <HomeMenuItemIconContainer>
                <FiTrendingUp style={{ padding: "1%" }} />
              </HomeMenuItemIconContainer>
            </HomeMenuItemContainer>
          </StyledLink>
        </MenuRow>
        <MenuRow>
          <StyledLink to="/social">
            {" "}
            <HomeMenuItemContainer>
              Social Media
              <HomeMenuItemIconContainer>
                <AiOutlineReddit style={{ padding: "1%" }} />
                <TiSocialTwitter style={{ padding: "1%" }} />
              </HomeMenuItemIconContainer>
            </HomeMenuItemContainer>
          </StyledLink>
          <StyledLink to="/research">
            {" "}
            <HomeMenuItemContainer>
              Research
              <HomeMenuItemIconContainer>
                <AiOutlineFileSearch style={{ padding: "1%" }} />
              </HomeMenuItemIconContainer>
            </HomeMenuItemContainer>
          </StyledLink>
        </MenuRow>
        <MenuRow>
          <StyledLink to="/earnings">
            {" "}
            <HomeMenuItemContainer>
              Upcoming Earnings
              <HomeMenuItemIconContainer>
                <IoCalendarSharp style={{ padding: "1%" }} />
              </HomeMenuItemIconContainer>
            </HomeMenuItemContainer>
          </StyledLink>
          <StyledLink to="/">
            {" "}
            <HomeMenuItemContainerDisabled>
              Screener
              <HomeMenuItemIconContainerDisabled>
                <AiOutlineScan style={{ padding: "1%" }} />
              </HomeMenuItemIconContainerDisabled>
            </HomeMenuItemContainerDisabled>
          </StyledLink>
        </MenuRow>
      </SectorMenuHome>
    </SectorContainer>
  );
};

export default MainMenu;
