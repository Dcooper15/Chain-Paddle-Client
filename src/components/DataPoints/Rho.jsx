import React from "react";
import {
  DataGreekContainer,
  DataGreekHeader,
  GreekDataComponent,
} from "../Styles/styledElements";
import { callIndexUnfixed, putIndexUnfixed } from "../Globals/globalFunctions";

const Rho = ({ option, mapType }) => {
  const prop = "rho";

  try {
    return (
      <DataGreekContainer>
        <DataGreekHeader>Rho</DataGreekHeader>

        <GreekDataComponent>
          {mapType === "call"
            ? callIndexUnfixed(option, prop)
            : putIndexUnfixed(option, prop)}
        </GreekDataComponent>
      </DataGreekContainer>
    );
  } catch (error) {
    <DataGreekContainer>
      <DataGreekHeader>Rho</DataGreekHeader>

      <GreekDataComponent>N/A</GreekDataComponent>
    </DataGreekContainer>;
  }
};

export default Rho;
