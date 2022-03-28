import React from "react";
import {
  StyledCardHeader,
  CardRow,
  StyledPercentChangeUp,
  StyledPercentChangeDown,
} from "../Styles/styledElements";

const MapWatchlistCardHeader = ({ option }) => {
  return (
    <StyledCardHeader>
      <CardRow>
        <strong>
          {option.description.includes("(")
            ? option.description.slice(0, option.description.indexOf("("))
            : option.description}
        </strong>

        <></>

        {option.markPercentChange >= 0 ? (
          <StyledPercentChangeUp>
            +{option.markPercentChange}%
          </StyledPercentChangeUp>
        ) : (
          <StyledPercentChangeDown>
            {option.markPercentChange}%
          </StyledPercentChangeDown>
        )}
      </CardRow>
    </StyledCardHeader>
  );
};

export default MapWatchlistCardHeader;
