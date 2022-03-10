import React from "react";
import { BackButtonContainer } from "../../Styles/styledElements";
import { BiArrowBack } from "react-icons/bi";

const GoBackButton = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <BackButtonContainer>
        <BiArrowBack onClick={goBack} />
      </BackButtonContainer>
    </>
  );
};

export default GoBackButton;
