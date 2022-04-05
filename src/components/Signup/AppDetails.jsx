import React from "react";
import {
  AppDetailsContainer,
  // SignupImageContainer,
  //StyledSignUpImage,
  SignUpTextHeader,
  // SignUpTextParagraph,
} from "../Styles/styledElements";
//import CompareDataDark from "../../media/CompareDataDark.png";
const AppDetails = () => {
  return (
    <AppDetailsContainer>
      <SignUpTextHeader>Options analytics, made easy</SignUpTextHeader>
      {/* <SignUpTextParagraph>
        Initial options are set to the underlying's nearest expiration and one
        strike out of the money.
      </SignUpTextParagraph>
      <SignupImageContainer>
        <StyledSignUpImage src={CompareDataDark} alt="CompareData" />
      </SignupImageContainer> */}
    </AppDetailsContainer>
  );
};

export default AppDetails;
