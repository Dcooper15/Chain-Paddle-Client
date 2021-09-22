import React from "react";
import {
  DataContainer,
  DataHeader,
  DataComponent,
} from "../Styles/styledElements";

const BidPrice = ({ option, mapType }) => {
  const callIndex = Object.keys(option.callExpDateMap).map((entry) => {
    return Object.keys(option.callExpDateMap[entry]).map((innerArrayID) =>
      option.callExpDateMap[entry][innerArrayID][0].bid.toFixed(2)
    );
  })[0][1];
  const putIndex = Object.keys(option.putExpDateMap).map((entry) => {
    return Object.keys(option.putExpDateMap[entry]).map((innerArrayID) =>
      option.putExpDateMap[entry][innerArrayID][0].bid.toFixed(2)
    );
  })[0][0];

  try {
    return (
      <DataContainer>
        <DataHeader>Bid</DataHeader>

        <DataComponent>
          {mapType === "call" ? callIndex : putIndex}
        </DataComponent>
      </DataContainer>
    );
  } catch (error) {
    <DataContainer>
      <DataHeader>Bid</DataHeader>

      <DataComponent>N/A</DataComponent>
    </DataContainer>;
  }
};

export default BidPrice;
