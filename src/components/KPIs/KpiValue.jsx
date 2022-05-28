import React 
// { useState, useContext } 
from "react";

//import { ThemeContext } from "styled-components";
//import { Card, Button } from "@material-ui/core";
import {
  StyledKpiItem,
  StyledKpiValue,
  StyledKpiDescription,
} from "../Styles/styledElements";


const KpiValue = ({ description, value }) => {
//   const theme = useContext(ThemeContext);
  return (
    <StyledKpiItem>
      <StyledKpiValue>{value}</StyledKpiValue>
      <StyledKpiDescription>{description}</StyledKpiDescription>
    </StyledKpiItem>
  );
};

export default KpiValue;
