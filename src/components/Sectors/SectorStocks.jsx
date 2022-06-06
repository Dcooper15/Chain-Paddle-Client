import React, { useState, useEffect, useContext } from "react";
import {
  useRecoilState,
  //useRecoilValue
} from "recoil";
import { dataDisplayState } from "../../recoil/atoms/globalState";
import { ThemeContext } from "styled-components";
import { SectorHeader } from "../Styles/styledElements";
import { useStyles } from "../Styles/muiStyles";
import axios from "axios";
//import { useParams } from "react-router";
import { Card, Button } from "@material-ui/core";
import SectorItemsMenu from "./SectorItemsMenu";
import DataGridDisplay from "../DataGrid/DataGridDisplay";
import MapCardHeader from "../DataPoints/MapCardHeader";
import MapDataPoints from "../DataPoints/MapDataPoints";
import GridToggle from "../Styles/MuiComponents/GridToggle";
import LoadingSpinner from "../Styles/Animations/LoadingSpinner";

let symbolArray = [];

function SectorStocks() {
  const classes = useStyles();
  const theme = useContext(ThemeContext);
  const [dataArray, setDataArray] = useState([]);
  const [sectorSelected, setSectorSelected] = useState("Finance");
  const [handleTypeChange, setHandleTypeChange] = useState(false);
  const [showGridData, setShowGridData] = useRecoilState(dataDisplayState);

  const toggleGrid = () => setShowGridData(!showGridData);

  //const { sector } = useParams();

  const buttonHandlerPut = () => {
    setHandleTypeChange(true);
  };

  const buttonHandlerCall = () => {
    setHandleTypeChange(false);
  };

  console.log(sectorSelected);
  const selectSector = (selection) => {
    setSectorSelected(selection);
  };

  let sectorError = [];
  switch (sectorSelected) {
    case "Tech":
      symbolArray = [
        "AMD",
        "SONY",
        "ZM",
        "AAPL",
        "MSFT",
        "AMZN",
        "ORCL",
        "GOOGL",
        "NFLX",
        "NVDA",
        "PLTR",
        "SNOW",
      ];
      break;
    case "Entertainment":
      symbolArray = ["AMC", "ATVI", "DIS", "MGM", "WYNN"];
      break;
    case "Airlines":
      symbolArray = ["ALGT", "DAL", "LUV", "ALK", "UAL", "AAL", "SAVE", "BA"];
      break;
    case "Finance":
      symbolArray = ["AXP", "BAC", "C", "JPM", "WFC"];
      break;
    case "Oil":
      symbolArray = ["PXD", "COP", "MPC", "OXY", "CVX", "XOM", "BP"];
      break;
    case "Cannabis":
      symbolArray = ["CRON", "ACB", "TLRY", "HEXO", "SNDL", "IGC", "OGI"];
      break;
    case "Pharmaceutics":
      symbolArray = ["JNJ", "PFE", "MRNA", "AZN", "AMGN", "BNTX", "SGEN"];
      break;
    case "Alternative Energy":
      symbolArray = ["NEE", "FSLR", "SEDG", "PLUG", "BLNK", "ENPH", "SPWR"];
      break;
    case "Automotive":
      symbolArray = ["HYLN", "GM", "NIO", "CVNA", "F", "TSLA", "RIDE", "WKHS"];
      break;
    case "Grocery":
      symbolArray = ["WMT", "ACI", "COST", "KR", "GO", "BJ", "TGT"];
      break;
    case "Crypto":
      symbolArray = ["MARA", "RIOT", "BTCM", "BITF", "BITQ", "HUT", "COIN"];
      break;
    case "Social Media":
      symbolArray = ["PINS", "TWTR", "FB", "SNAP"];
      break;
    default:
      sectorError = `No data to display for ${sectorSelected}.`;
  }

  const getButtonColor = theme.name === "dark" ? "#fff" : "#F8E4A5";
  const getCardColors =
    theme.name === "dark"
      ? {
          backgroundColor: "#38372b",
          borderColor: "#d4af37",
          color: "#ffebcd",
        }
      : {
          backgroundColor: "#f5f0f0",
          borderColor: "#00afc9",
          color: "#002933",
        };
  useEffect(() => {
    const chainData = [];
    symbolArray.map((symbol) =>
      axios
        .get(
          `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&contractType=ALL&strikeCount=2&includeQuotes=TRUE&toDate=${process.env.REACT_APP_DATE}range=OTM`
        )
        .then((response) => {
          chainData.push(response.data);
          setDataArray([chainData]);
        })
    );
  }, [sectorSelected]);

  return (
    <>
      <SectorItemsMenu
        sectorSelector={selectSector}
        sectorSelected={sectorSelected}
      />
      {!!sectorError.length ? (
        <SectorHeader>{sectorError}</SectorHeader>
      ) : (
        <SectorHeader>{sectorSelected}</SectorHeader>
      )}
      <Button
        className={
          theme.name === "dark"
            ? handleTypeChange === false
              ? classes.buttonDark
              : classes.buttonDarkUns
            : handleTypeChange === false
            ? classes.buttonLight
            : classes.buttonLightUns
        }
        type="submit"
        size="small"
        onClick={buttonHandlerCall}
        style={{ marginLeft: "3%" }}
      >
        <strong style={{ color: getButtonColor }}>Call</strong>
      </Button>
      <Button
        className={
          theme.name === "dark"
            ? handleTypeChange === true
              ? classes.buttonDark
              : classes.buttonDarkUns
            : handleTypeChange === true
            ? classes.buttonLight
            : classes.buttonLightUns
        }
        type="submit"
        size="small"
        onClick={buttonHandlerPut}
      >
        <strong style={{ color: getButtonColor }}>Put</strong>
      </Button>
      <br></br>
      <GridToggle showGridData={showGridData} _onClick={toggleGrid} />

      {!!dataArray.length ? (
        showGridData && !handleTypeChange ? (
          <DataGridDisplay
            option={
              !!dataArray.length
                ? dataArray.map((stock) => stock.map((option) => option))
                : " "
            }
            mapType={"call"}
          />
        ) : (
          ""
        )
      ) : (
        " "
      )}
      {!!dataArray.length ? (
        dataArray.map((stock) =>
          stock.map((option) =>
            !showGridData ? (
              <Card
                key={option.symbol}
                className={classes.card}
                style={getCardColors}
                variant="outlined"
                hidden={handleTypeChange === true}
                raised={true}
              >
                <MapCardHeader option={option} />

                <MapDataPoints option={option} mapType={"call"} />
              </Card>
            ) : (
              ""
            )
          )
        )
      ) : (
        <LoadingSpinner />
      )}
      {!!dataArray.length ? (
        showGridData && handleTypeChange ? (
          <DataGridDisplay
            option={
              !!dataArray.length
                ? dataArray.map((stock) => stock.map((option) => option))
                : " "
            }
            mapType={"put"}
          />
        ) : (
          ""
        )
      ) : (
        " "
      )}
      {!!dataArray.length
        ? dataArray.map((stock) =>
            stock.map((option) =>
              !showGridData ? (
                <Card
                  key={option.symbol}
                  className={classes.card}
                  style={getCardColors}
                  variant="outlined"
                  hidden={handleTypeChange === false}
                  raised={true}
                >
                  <MapCardHeader option={option} />

                  <MapDataPoints option={option} mapType={"put"} />
                </Card>
              ) : (
                ""
              )
            )
          )
        : " "}
    </>
  );
}

export default SectorStocks;
