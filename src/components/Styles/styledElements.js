import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectorHeader = styled.h2`
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.headerColor};
  font-size: 36px;
  margin-left: 3%;
  margin-right: 3%;
  @media (max-width: 800px) {
    font-size: 4.6vw;
    position: relative;
  }
`;

//search
export const StyledSearchHeader = styled.i`
  color: ${(props) => props.theme.headerColor};
  font-size: 15px;
  margin-bottom: 2%;
`;

//full chain header
export const OptionHeaderContainer = styled.div`
  justify-content: left;
  display: inline-flex;
  flex-flow: row wrap;
  align-items: baseline;
  box-sizing: border-box;
  width: 98%;
  margin-bottom: 12px;
`;
export const OptionCName = styled.h4`
  color: ${(props) => props.theme.headerColor};
  margin-left: 2%;
  flex-basis: 100%;
  font-size: 2vh;
  margin-bottom: 0;
`;
export const OptionCSub = styled.strong`
  justify-content: left;
  align-items: left;
  color: ${(props) => props.theme.headerColor};
  font-size: 18px;
  margin-top: 0;
  margin-left: 2%;
  margin-right: 0%;
  margin-bottom: 1%;
`;

export const StyledNavbar = styled.div`
  color: ${(props) => props.theme.accentColor};
  justify-content: left;
  display: inline-flex;
  flex-flow: row wrap;
  align-items: baseline;
`;
//Sectors Page
export const SectorContainer = styled.div`
  justify-content: center;
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;
export const SectorMenu = styled.div`
  justify-content: center;
  text-align: center;
  display: inline-flex;
  flex-flow: nowrap;
  box-sizing: border-box;
  width: 95%;
  margin-right: 3%;
  margin-left: 3%;
  flex-direction: column;
  align-content: space-around;
`;

export const MenuRow = styled.div`
  flex: 2;
  justify-content: center;
  display: inline-flex;
  padding-right: 1%;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 50%;
  flex-direction: row;
  align-content: space-between;
`;

export const MenuRowExtra = styled.div`
  flex: 1;
  justify-content: center;
  display: inline-flex;
  align-items: flex-start;
  box-sizing: border-box;
  width: 49%;
  height: 50%;
  flex-direction: row;
  align-content: space-around;
`;

export const ColumnLeft = styled.div`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  border-color: ${(props) => props.theme.accentColor};
  border-top-style: groove;
  border-left-style: ridge;
  border-right-style: ridge;
  border-bottom-style: groove;
  border-radius: 20px;
  border-width: 2.8px;
  margin-top: 2%;
  margin-right: 1%;
  margin-bottom: 1%;
  text-decoration: none;
  font-size: 3.5vw;
  max-width: 368px;
  max-height: 100px;
  padding: 1.5%;
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
    transition: 0.5s ease;
  }
  @media (max-width: 800px) {
    border-width: 0.3vw;
    border-radius: 2.5vw;
  }
`;

export const ColumnRight = styled.div`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  border-color: ${(props) => props.theme.accentColor};
  border-style: groove;
  border-radius: 20px;
  border-width: 2.8px;
  margin-top: 2%;
  margin-left: 1%;
  margin-bottom: 1%;
  text-decoration: none;
  font-size: 3.5vw;
  max-width: 368px;
  max-height: 100px;
  padding: 1.5%;
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
    transition: 0.5s ease;
  }
  @media (max-width: 800px) {
    border-width: 0.3vw;
    border-radius: 2.5vw;
  }
`;
export const ColumnRightDummy = styled.div`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 2%;
  margin-left: 1%;
  margin-bottom: 1%;
  text-decoration: none;
  font-size: 3.5vw;
  max-width: 368px;
  max-height: 100px;
  padding: 1.5%;
`;

export const SectorMenuHome = styled.div`
  justify-content: center;
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  width: 600px;
  position: relative;
  top: 50%;
  width: 100%;
  margin-left: 0.5%;
  margin-right: 0.5%;
  margin-top: 14vw;
  margin-bottom: 8vw;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
`;

export const StyledMainMenuLink = styled(Link)`
color: ${(props) => props.theme.headerColor};
 flex: 0;
  text-decoration: none;
  margin: 1rem;
  justify-content: center;
  font-size: 5vw;
  max-width: 154px
  position: relative;
  max-height: 33px;

`;

//WatchList
export const WatchListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 10%;
`;

export const StyledWatchListHeader = styled.h4`
  flex: 0;
  color: ${(props) => props.theme.headerColor};
  font-size: 30px;
  text-decoration: underline;
  justify-content: left;
  display: inline-flex;
  flex-flow: row;
  flex-basis: 100%;
  align-items: flex-start;
  box-sizing: border-box;
  width: 40%;
  flex-direction: column;
  margin-left: 1%;
  @media (max-width: 800px) {
    font-size: 3.8vw;
    position: relative;
  }
`;

export const StyledPlaceHolder = styled.i`
  flex: 0;
  color: ${(props) => props.theme.accentColor};
  justify-content: left;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  flex-direction: column;
  font-size: 12px;
  margin-left: 1%;
`;

export const StyledExpDate = styled.i`
color: ${(props) => props.theme.headerColor};
border-style: solid,
border-width: 1px,
`;

export const SupLinks = styled.div`
  text-decoration: none;
  margin-bottom: 2%;
  cursor: pointer;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.headerColor};
  text-decoration: none;
  margin: auto;
  font-size: 35px;
  position: relative;
  justify-content: center;
  @media (max-width: 800px) {
    font-size: 4.3vw;
    position: relative;
  }
`;

export const StyledSymbolLink = styled(Link)`
  color: ${(props) => props.theme.headerColor};
  text-decoration: none;
  position: relative;
`;

export const StyledBackLink = styled(Link)`
  color: ${(props) => props.theme.accentColor};
  text-decoration: none;
  position: relative;
  font-size: 20px;
  margin-left: 1%;
  @media (max-width: 800px) {
    font-size: 16px;
    position: relative;
  }
`;

export const StyledNavLink = styled(Link)`
  color: ${(props) => props.theme.accentColor};
  text-decoration: none;
  position: relative;
  font-size: 14px;
  margin-left: 1%;
  @media (max-width: 800px) {
    font-size: 12px;
    position: relative;
  }
`;

const StyledExtLinkButton = styled.button`
  color: ${(props) => props.theme.fontColor};
  text-decoration: none;
  margin: 1rem;
  position: relative;
  font-size: 10px;
`;

export const ExtLink = StyledExtLinkButton.withComponent("a");

export const ButtonDiv = styled.div`
  display: inline-flex;
  margin-left: 2%;
  margin-right: 2%;
  width: 5%;
`;

export const StyledMenuItem = styled.strong`
  color: ${(props) => props.theme.fontColor};
`;

// card data
export const StyledCardHeader = styled.div`
  justify-content: left;
  display: inline-flex;
  flex-flow: row wrap;
  align-items: center;
  box-sizing: border-box;
  width: 98%;
  flex-direction: row;
  border-style: solid;
  border-top: 0px ${(props) => props.theme.accentColor};
  border-left: 0px ${(props) => props.theme.accentColor};
  border-right: ${(props) => props.theme.accentColor};
  border-color: ${(props) => props.theme.accentColor};
  border-width: 1px;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  margin-bottom: 1%;
`;
export const CardRow = styled.div`
  flex: 1;
  justify-content: left;
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
  flex-direction: row;
  align-content: bottom;
  margin-bottom: 0;
`;
export const StyledName = styled.div`
  flex: 0;
  flex-basis: 100%;
  justify-content: left;
  align-items: flex-start;
  flex-direction: row;
  flex-flow: no wrap;
  margin-top: 0;
`;
export const StyledStockPrice = styled.strong`
  flex: 0;
  padding-left: 2%;
  align-items: center;
`;
export const StyledPercentHeader = styled.i`
  flex: 0;
  margin-left: 1%;
  align-items: bottom;
`;
export const StyledOcCollateral = styled.i`
  color: ${(props) => props.theme.headerColor};
  flex: 0;
  flex-flow: no wrap;
  flex-basis: 100%;
  font-size: 14px;
`;
export const StyledSliderActiveButton = styled.i`
  font-size: 16px;
  color: ${(props) => props.theme.accentColor};
  flex: 0;
  margin-left: 3%;
  background: 0 3px 5px 2px rgba(212, 175, 55, 0.5);
  align-items: bottom;
  box-shadow: 0 3px 5px 2px rgba(212, 175, 55, 0.5);
`;
export const StyledInTheMoney = styled.strong`
  color: ${(props) => props.theme.headerColor};
  flex: 0;
  margin-left: 2%;
  justify-content: right;
  flex-flow: no wrap;
`;
export const StrikeHeader = styled.strong``;

export const DataContainer = styled.div`
  justify-content: right;
  display: inline-flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  width: 55%;
  flex-direction: row;
  align-content: space-between;
  border-style: ridge;
  border-top: 0px ${(props) => props.theme.dataLineColor};
  border-left: 0px ${(props) => props.theme.dataLineColor};
  border-right: ${(props) => props.theme.dataLineColor};
  border-color: ${(props) => props.theme.dataLineColor};
  border-width: thin;
  margin-right: 5%;
`;

export const DataHeader = styled.div`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
export const DataComponent = styled.div`
  flex: 0;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
`;
export const DataGreekContainer = styled.div`
  justify-content: right;
  display: inline-flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  width: 38%;
  flex-direction: row;
  align-content: space-between;
  border-style: ridge;
  border-top: 0px ${(props) => props.theme.dataLineColor};
  border-left: 0px ${(props) => props.theme.dataLineColor};
  border-right: ${(props) => props.theme.dataLineColor};
  border-color: ${(props) => props.theme.dataLineColor};
  border-width: thin;
  align-items: flex-end;
  margin-right: 2%;
`;
export const DataGreekHeader = styled.div`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
export const GreekDataComponent = styled.div`
  flex: 0;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
`;

export const StyledPercentChangeUp = styled.i`
  color: ${(props) => props.theme.percentChangeUp};
  padding-left: 1%;
  margin-left: 1%;
`;

export const StyledPercentChangeDown = styled.i`
  color: ${(props) => props.theme.percentChangeDown};
  padding-left: 1%;
  margin-left: 1%;
`;

//PL slider

export const SliderPageContainer = styled.div``;

export const StyledFormControl = styled.div`
  margin-left: 5%;
  margin-bottom: 3%;
`;

export const StyledClose = styled.strong`
  background: ${(props) => props.theme.accentColor};
  border-radius: 20px;
  font-size: 22px;
  display: flex;
  flex-direction: row-reverse;
  width: 23px;
  padding-right: 1px;
  align-items: center;
  margin-left: 92.5%;
  margin-right: 5%;
  margin-top: 3%;
`;

export const SliderContainer = styled.div`
  height: 100%;
  z-index: 20;
  width: 100%;
`;

export const StyledSliderCardInactive = styled.div`
  bottom: -100%;
  transition: all 3.5 ease-in;
  opacity: 1;
  z-index: 10;
`;

export const StyledSliderCardActive = styled.div`
  opacity: 1;
  margin-left: 2.5%;
  background-color: #ccc;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 20;
  transition-timing-function: ease-out;
  transition: 0.5s;
  transform: translateY(40);
  bottom: 0;
  margin-left: 0%;
`;

export const SliderDataDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
`;

export const RowOne = styled.div`
  flex: 1;
  flex-wrap: nowrap;
  align-items: flex-start;
`;
export const StyledLabel = styled.label`
  color: ${(props) => props.theme.headerColor};
  display: block;
  margin: 5%;
  justify-content: center;
`;
export const StyledStratLabel = styled.label`
  color: ${(props) => props.theme.headerColor};
  justify-content: center;
  
`;

export const StyledValue = styled.strong`
  color: ${(props) => props.theme.headerColor};
  display: block;
  justify-content: center;
  align-self: center;
`;

export const StyledSPE = styled.strong`
  color: ${(props) => props.theme.headerColor};
  margin-left: 5%;
`;
