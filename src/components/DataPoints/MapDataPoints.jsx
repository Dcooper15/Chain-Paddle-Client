import React, { useState } from "react";
import { ThemeColorContainer } from "../Styles/styledElements";
import { Button } from "@material-ui/core";
import StrikeOneOtm from "./StrikeOneOtm";
import PercentChange from "./PercentChange";
import HundredShares from "./HundredShares";
import CspCollateral from "./CspCollateral";
import DataValueFixed from "./DataValueFixed";
import DataValueUnfixed from "./DataValueUnfixed";
import GreekDataValue from "./GreekDataValue";
import Moment from "react-moment";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { callIndexUnfixed, putIndexUnfixed } from "../Globals/globalFunctions";
import OptionComments from "../Comments/OptionComments";

const date = new Date();
const MapDataPoints = ({ option, mapType }) => {
  const [showComments, setShowComments] = useState();
  

  const buttonHandlerShowComments = () => {
    if (showComments === true) {
      setShowComments(false);
    } else {
      setShowComments(true);
    }
  };
  const callDescription = callIndexUnfixed(option, "description");
  const putDescription = putIndexUnfixed(option, "description");

  return (
    <>
      <br></br>
      <StrikeOneOtm option={option} mapType={mapType} />
      <PercentChange option={option} mapType={mapType} />
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
      <br></br>
      {mapType === "call" ? (
        <HundredShares option={option} />
      ) : (
        <CspCollateral option={option} />
      )}
      <i>Greeks</i>
      <DataValueFixed
        option={option}
        mapType={mapType}
        objectValue={"bid"}
        header={"Bid"}
        multiplyBy={1}
      />
      <></>
      <GreekDataValue
        option={option}
        mapType={mapType}
        objectValue={"delta"}
        header={"Delta"}
      />
      <DataValueFixed
        option={option}
        mapType={mapType}
        objectValue={"ask"}
        header={"Ask"}
        multiplyBy={1}
      />
      <></>
      <GreekDataValue
        option={option}
        mapType={mapType}
        objectValue={"theta"}
        header={"Theta"}
      />
      <DataValueFixed
        option={option}
        mapType={mapType}
        objectValue={"mark"}
        header={"Premium"}
        multiplyBy={100}
        dollarSign={"$"}
      />
      <></>
      <GreekDataValue
        option={option}
        mapType={mapType}
        objectValue={"rho"}
        header={"Rho"}
      />
      <DataValueUnfixed
        option={option}
        mapType={mapType}
        objectValue={"totalVolume"}
        header={"Volume"}
      />
      <></>
      <GreekDataValue
        option={option}
        mapType={mapType}
        objectValue={"gamma"}
        header={"Gamma"}
      />
      <DataValueUnfixed
        option={option}
        mapType={mapType}
        objectValue={"openInterest"}
        header={"Open Interest"}
      />
      <></>
      <GreekDataValue
        option={option}
        mapType={mapType}
        objectValue={"vega"}
        header={"Vega"}
      />
      <DataValueUnfixed
        option={option}
        mapType={mapType}
        objectValue={"volatility"}
        header={"Implied Volatility"}
      />
      <DataValueUnfixed
        option={option}
        mapType={mapType}
        objectValue={"daysToExpiration"}
        header={"Days/Exp"}
      />
      <>
        <>Exp Date </>
        <Moment
          add={{
            days: Object.keys(option.callExpDateMap).map((entry) => {
              return Object.keys(option.callExpDateMap[entry]).map(
                (innerArrayID) =>
                  option.callExpDateMap[entry][innerArrayID][0].daysToExpiration
              );
            })[0][1],
          }}
          format="MMM DD"
        >
          {date}
        </Moment>
      </>
      {showComments === true ? (
        <>
          <br></br>
          <OptionComments
            symbol={option.symbol}
            mapType={mapType}
            callDescription={callDescription}
            putDescription={putDescription}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default MapDataPoints;
