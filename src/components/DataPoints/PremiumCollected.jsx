import React from "react";
import {
  DataContainer,
  DataHeader,
  DataComponent,
} from "../Styles/styledElements";
import {callIndex, putIndex} from "../Globals/globalFunctions";

const PremiumCollected = ({ option, mapType }) => {
  var prop = "mark";
  try {
    return (
      <DataContainer>
        <DataHeader>Premium</DataHeader>

        <DataComponent>
          ${mapType === "call" ? callIndex(option, prop, 2, 100) : putIndex(option, prop, 2, 100)}
        </DataComponent>
      </DataContainer>
    );
  } catch (error) {
    return (
      <DataContainer>
        <DataHeader>Premium</DataHeader>
        <DataComponent>N/A</DataComponent>
      </DataContainer>
    );
  }
};

export default PremiumCollected;
