import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import {
  SectorItemsContainer,
  StyledSectorItem,
  SectorText,
} from "../Styles/styledElements";

const SectorItemsMenu = ({ sectorSelector, sectorSelected }) => {
  const theme = useContext(ThemeContext);
  const sectors = [
    "Finance",
    "Tech",
    "Airlines",
    "Oil",
    "Cannabis",
    "Pharmaceutics",
    "Alternative Energy",
    "Automotive",
    "Grocery",
    "Crypto",
    "Social Media",
  ];
  const selectedBackground =
    theme.name === "dark"
      ? "linear-gradient(45deg, #826a1f 5%, #d4af37 90%)"
      : "linear-gradient(45deg, #002f36 5%, #00afc9 90%)";
  const selectedColor = "#ffdbd6"
  const accentColor = theme.name === "dark" ? "#d4af37" : "#146175";

  return (
    <SectorItemsContainer>
      {sectors.map((item) => (
        <StyledSectorItem
          style={{
            background: sectorSelected === item ? selectedBackground : "",
            color: sectorSelected === item ? selectedColor : accentColor,
          }}
          onClick={() => sectorSelector(item)}
        >
          <SectorText> {item}</SectorText>
        </StyledSectorItem>
      ))}
    </SectorItemsContainer>
  );
};

export default SectorItemsMenu;
