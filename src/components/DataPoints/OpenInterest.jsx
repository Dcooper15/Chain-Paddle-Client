import React from "react";
import {
  DataContainer,
  DataHeader,
  DataComponent,
} from "../Styles/styledElements";
import {callIndexUnfixed, putIndexUnfixed} from "../Globals/globalFunctions";

const OpenInterest = ({ option, mapType }) => {
  const prop = "openInterest"
  // const callIndex = Object.keys(option.callExpDateMap).map((entry) => {
  //   return Object.keys(option.callExpDateMap[entry]).map(
  //     (innerArrayID) =>
  //       option.callExpDateMap[entry][innerArrayID][0].openInterest
  //   );
  // })[0][1];
  // const putIndex = Object.keys(option.putExpDateMap).map((entry) => {
  //   return Object.keys(option.putExpDateMap[entry]).map(
  //     (innerArrayID) =>
  //       option.putExpDateMap[entry][innerArrayID][0].openInterest
  //   );
  // })[0][0];
  try {
    return (
      <DataContainer>
        <DataHeader>Open Interest</DataHeader>
        <DataComponent>
        {mapType === "call"
            ? callIndexUnfixed(option, prop)
            : putIndexUnfixed(option, prop)}
        </DataComponent>
      </DataContainer>
    );
  } catch (error) {
    return (
      <DataContainer>
        <DataHeader>Open Interest</DataHeader>
        <DataComponent>N/A</DataComponent>
      </DataContainer>
    );
  }
};

export default OpenInterest;
