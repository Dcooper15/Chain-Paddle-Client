import React from "react";
import { IntroContainer } from "../Styles/styledElements";

const Intro = () => {
  return (
    <IntroContainer>
      All initial option data is set to the underlying's nearest expiration and
      is one strike out of the money. Select any ticker symbol to open the
      underlying's full option chain.
    </IntroContainer>
  );
};


export default Intro;