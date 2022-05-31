import React, { useState, useEffect, useContext } from "react";
import {
  useRecoilState,
  // useRecoilValue
} from "recoil";
import {
  dataDisplayState,
  //showGridToggle,
} from "../../recoil/atoms/globalState";
import { ThemeContext } from "styled-components";
import { SectorHeader, ButtonDiv } from "../Styles/styledElements";
import { useStyles } from "../Styles/muiStyles";
import axios from "axios";
import { useParams } from "react-router";
import { Card, Button } from "@material-ui/core";
import MapDataPoints from "../DataPoints/MapDataPoints";
import MapCardHeader from "../DataPoints/MapCardHeader";
import DataGridDisplay from "../DataGrid/DataGridDisplay";
import GridToggle from "../Styles/MuiComponents/GridToggle";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import LoadingSpinner from "../Styles/Animations/LoadingSpinner";

let header = [];

function MoverStocks() {
  const classes = useStyles();
  const theme = useContext(ThemeContext);
  const [marketData, setMarketData] = useState([]);
  const [handleTypeChange, setHandleTypeChange] = useState(false);
  const [direction, setDirection] = useState("up");
  const [showGridData, setShowGridData] = useRecoilState(dataDisplayState);
  const toggleGrid = () => setShowGridData(!showGridData);
  const { market } = useParams();

  const buttonHandlerPut = () => {
    setHandleTypeChange(true);
  };
  const buttonHandlerCall = () => {
    setHandleTypeChange(false);
  };
  const buttonHandlerUp = () => {
    setDirection("up");
  };
  const buttonHandlerDown = () => {
    setDirection("down");
  };

  switch (market) {
    case "compx":
      header = "NASDAQ";
      break;
    case "dji":
      header = "DJI";
      break;
    case "spx.x":
      header = "SPX";
      break;
    case "general":
      header = "General";
      break;
    case "mostactive":
      header = "";
      break;
    default:
      header = `No data to display for ${market}.`;
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
    const marketDataArray = [];
    if (market === "general") {
      axios
        .get(
          `https://${process.env.REACT_APP_HUB_URL}/api/v3/${
            direction === "up" ? "gainers" : "losers"
          }?apikey=${process.env.REACT_APP_FM_CLIENT_ID}`
        )
        .then((response) => {
          const marketMoversArray = response.data.map(
            (marketSymbol) => marketSymbol.ticker
          );

          marketMoversArray.map((symbol) =>
            axios
              .get(
                `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&contractType=ALL&strikeCount=2&includeQuotes=TRUE&toDate=${process.env.REACT_APP_DATE}&range=OTM`
              )
              .then((response) => {
                if (response.data.status === "SUCCESS") {
                  marketDataArray.push(response.data);
                }
                setMarketData([marketDataArray]);
              })
          );
        });
    } else if (market === "mostactive") {
      axios
        .get(
          `https://${process.env.REACT_APP_HUB_URL}/api/v3/actives?apikey=${process.env.REACT_APP_FM_CLIENT_ID}`
        )
        .then((response) => {
          const marketMoversArray = response.data.map(
            (marketSymbol) => marketSymbol.ticker
          );

          marketMoversArray.map((symbol) =>
            axios
              .get(
                `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&contractType=ALL&strikeCount=2&includeQuotes=TRUE&toDate=${process.env.REACT_APP_DATE}&range=OTM`
              )
              .then((response) => {
                if (response.data.status === "SUCCESS") {
                  marketDataArray.push(response.data);
                }
                setMarketData([marketDataArray]);
              })
          );
        });
    } else {
      axios
        .get(
          `https://api.tdameritrade.com/v1/marketdata/$${market.toUpperCase()}/movers?apikey=${
            process.env.REACT_APP_GITHUB_CLIENT_ID
          }&direction=${direction}&change=percent`
        )
        .then((response) => {
          const marketMoversArray = response.data.map(
            (marketSymbol) => marketSymbol.symbol
          );

          marketMoversArray.map((symbol) =>
            axios
              .get(
                `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&contractType=ALL&strikeCount=2&includeQuotes=TRUE&toDate=${process.env.REACT_APP_DATE}&range=OTM`
              )
              .then((response) => {
                if (response.data.status === "SUCCESS") {
                  marketDataArray.push(response.data);
                }
                setMarketData([marketDataArray]);
              })
          );
        });
    }
  }, [market, direction]);

  return (
    <>
      {market === "mostactive" ? (
        <SectorHeader>Today's Most Actively Traded Tickers</SectorHeader>
      ) : (
        <SectorHeader style={{ marginLeft: "0.5%" }}>
          Today's Top Movers - {header.length ? header : " "}
          <ButtonDiv>
            <Button
              className={
                theme.name === "dark"
                  ? direction === "up"
                    ? classes.buttonDark
                    : classes.buttonDarkUns
                  : direction === "up"
                  ? classes.buttonLight
                  : classes.buttonLightUns
              }
              type="submit"
              onClick={buttonHandlerUp}
              style={{
                marginLeft: "1px",
                paddingTop: "3px",
                padding: "1px",
                minWidth: "30px",
              }}
            >
              <strong>
                <FaArrowUp style={{ color: "#26d134" }} />
              </strong>
            </Button>
            <Button
              className={
                theme.name === "dark"
                  ? direction === "down"
                    ? classes.buttonDark
                    : classes.buttonDarkUns
                  : direction === "down"
                  ? classes.buttonLight
                  : classes.buttonLightUns
              }
              type="submit"
              onClick={buttonHandlerDown}
              style={{
                marginLeft: "3px",
                paddingTop: "3px",
                padding: "1px",
                minWidth: "30px",
              }}
            >
              <strong>
                <FaArrowDown style={{ color: "#f53333" }} />
              </strong>
            </Button>
          </ButtonDiv>
        </SectorHeader>
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
      {!!marketData.length ? (
        showGridData && !handleTypeChange ? (
          <DataGridDisplay
            option={
              !!marketData.length
                ? marketData.map((stock) => stock.map((option) => option))
                : " "
            }
            mapType={"call"}
          />
        ) : (
          ""
        )
      ) : (
        <LoadingSpinner />
      )}
      {!!marketData.length ? (
        marketData.map((stock) =>
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
        <SectorHeader style={{ marginTop: "10%" }}>
          Top Movers unavailable on weekends and late hours
        </SectorHeader>
      )}
      {!!marketData.length ? (
        showGridData && handleTypeChange ? (
          <DataGridDisplay
            option={
              !!marketData.length
                ? marketData.map((stock) => stock.map((option) => option))
                : " "
            }
            mapType={"put"}
          />
        ) : (
          ""
        )
      ) : (
        ""
      )}
      {!!marketData.length
        ? marketData.map((stock) =>
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

export default MoverStocks;
