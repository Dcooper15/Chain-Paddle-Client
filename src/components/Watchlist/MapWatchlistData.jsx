import React, { useState } from "react";
import {
  DataContainer,
  DataHeader,
  DataComponent,
  DataGreekContainer,
  DataGreekHeader,
  GreekDataComponent,
  ThemeColorContainer,
  StyledOcCollateral,
} from "../Styles/styledElements";
import Moment from "react-moment";
import { Button } from "@material-ui/core";
import { FaRegComment, FaCalculator } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import OptionComments from "../Comments/OptionComments";
import ProfitLossSliderGlobal from "../ProfitLossSlider/ProfitLossSliderGlobal";

const MapWatchlistData = ({
  option,
  mapType,
  date,

  sharePrice,
  strike,
  premium,
}) => {
  const [showComments, setShowComments] = useState();
  const [showPlSlider, setShowPlSlider] = useState(false);
  const buttonHandlerShowComments = () => {
    if (showComments === true) {
      setShowComments(false);
    } else {
      setShowComments(true);
    }
  };
  const buttonHandlerShowPlSlider = () => {
    setShowPlSlider(!showPlSlider);
  };

  return (
    <>
      {mapType === "put" ? (
        <StyledOcCollateral>
          CSP Premium to Collateral Ratio{" "}
          {(((option.mark * 100) / (option.strikePrice * 100)) * 100).toFixed(
            2
          )}
          %
        </StyledOcCollateral>
      ) : (
        <StyledOcCollateral>
          CC Premium to 100 Shares Ratio{" "}
          {(((option.mark * 100) / (sharePrice * 100)) * 100).toFixed(2)}%
        </StyledOcCollateral>
      )}
      <br></br>
      <Button
        type="submit"
        size="small"
        style={{ padding: "0" }}
        onClick={() => buttonHandlerShowComments()}
      >
        <ThemeColorContainer>
          {showComments === true ? (
            <strong>
              <AiOutlineClose />
            </strong>
          ) : (
            <FaRegComment />
          )}
        </ThemeColorContainer>
      </Button>
      <Button
        type="submit"
        size="small"
        style={{ padding: "0" }}
        onClick={() => buttonHandlerShowPlSlider()}
      >
        <ThemeColorContainer>
          <FaCalculator />
        </ThemeColorContainer>
      </Button>
      <br></br>
      <>
        <DataContainer>
          <DataHeader>Strike</DataHeader>

          <DataComponent>{option.strikePrice}</DataComponent>
        </DataContainer>

        <i>Greeks</i>
        <DataContainer>
          <DataHeader>Bid</DataHeader>

          <DataComponent>{option.bid.toFixed(2)}</DataComponent>
        </DataContainer>
        <DataGreekContainer>
          <DataGreekHeader>Delta</DataGreekHeader>

          <GreekDataComponent>
            {option.delta === "NaN" ? "N/A" : option.delta}
          </GreekDataComponent>
        </DataGreekContainer>

        <DataContainer>
          <DataHeader>Ask</DataHeader>

          <DataComponent>{option.ask.toFixed(2)}</DataComponent>
        </DataContainer>
        <DataGreekContainer>
          <DataGreekHeader>Theta</DataGreekHeader>

          <GreekDataComponent>
            {option.theta === "NaN" ? "N/A" : option.theta}
          </GreekDataComponent>
        </DataGreekContainer>
        <DataContainer>
          <DataHeader>Premium</DataHeader>

          <DataComponent>${(option.mark * 100).toFixed(2)}</DataComponent>
        </DataContainer>
        <DataGreekContainer>
          <DataGreekHeader>Rho</DataGreekHeader>

          <GreekDataComponent>
            {option.rho === "NaN" ? "N/A" : option.rho}
          </GreekDataComponent>
        </DataGreekContainer>
        <DataContainer>
          <DataHeader>Open Interest</DataHeader>

          <DataComponent>{option.openInterest}</DataComponent>
        </DataContainer>
        <DataGreekContainer>
          <DataGreekHeader>Gamma</DataGreekHeader>

          <GreekDataComponent>
            {option.gamma === "NaN" ? "N/A" : option.gamma}
          </GreekDataComponent>
        </DataGreekContainer>
        <DataContainer>
          <DataHeader>Volume</DataHeader>

          <DataComponent>{option.totalVolume}</DataComponent>
        </DataContainer>
        <DataGreekContainer>
          <DataGreekHeader>Vega</DataGreekHeader>

          <GreekDataComponent>
            {option.vega === "NaN" ? "N/A" : option.vega}
          </GreekDataComponent>
        </DataGreekContainer>
        <DataContainer>
          <DataHeader>Implied Volatility</DataHeader>

          <DataComponent>{option.volatility}</DataComponent>
        </DataContainer>
        <DataContainer>
          <DataHeader>Days/Exp</DataHeader>

          <DataComponent>{option.daysToExpiration}</DataComponent>
        </DataContainer>
        <>
          <>Exp Date </>
          <Moment add={{ days: option.daysToExpiration }} format="MMM DD">
            {date}
          </Moment>
        </>
      </>
      {showPlSlider === true ? (
        <ProfitLossSliderGlobal
          sharePrice={sharePrice}
          strike={strike}
          premium={premium}
        />
      ) : (
        ""
      )}

      {showComments === true ? (
        <>
          <br></br>
          <OptionComments
            symbol={option.symbol}
            mapType={"full"}
            fullChainDescription={option.description}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default MapWatchlistData;
