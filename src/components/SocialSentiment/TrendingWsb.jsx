import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";
import {
  SectorHeader,
  WsbButtonContainer,
  WsbSubHeader,
} from "../Styles/styledElements";
import { useStyles } from "../Styles/muiStyles";
import axios from "axios";
import { Card, Button } from "@material-ui/core";
import MapDataPoints from "../DataPoints/MapDataPoints";
import MapCardHeader from "../DataPoints/MapCardHeader";
import {
  useRecoilState,
  //useRecoilValue
} from "recoil";
import {
  dataDisplayState,
  //toggleDataDisplayState,
} from "../../recoil/atoms/globalState";
import GridToggle from "../Styles/MuiComponents/GridToggle";
import DataGridDisplay from "../DataGrid/DataGridDisplay";

const monthNames = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
const date = new Date();
const month = date.getMonth();
const day = date.getDate();

function TrendingWsb() {
  const classes = useStyles();
  const theme = useContext(ThemeContext);
  const [marketData, setMarketData] = useState([]);
  const [handleTypeChange, setHandleTypeChange] = useState(false);
  const [handleThreadChange, setHandleThreadChange] = useState(["All"]);
  const [minutes, setMinutes] = useState([]);
  const [occurences, setOccurences] = useState([]);
  const [showGridData, setShowGridData] = useRecoilState(dataDisplayState);
  const toggleGrid = () => setShowGridData(!showGridData);

  const buttonHandlerPut = () => {
    setHandleTypeChange(true);
  };
  const buttonHandlerCall = () => {
    setHandleTypeChange(false);
  };
  const buttonHandlerAll = () => {
    setHandleThreadChange("All");
  };
  const buttonHandlerDaily = () => {
    setHandleThreadChange("Daily");
  };
  const buttonHandlerWeekend = () => {
    setHandleThreadChange("Weekend");
  };

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
    const wsbDataArray = [];
    if (handleThreadChange === "All") {
      axios
        .get(`https://www.reddit.com/r/wallstreetbets/comments.json?limit=100`)
        .then((response) => {
          const firstPostUtc = response.data.data.children[0].data.created_utc;
          const lastPostUtc =
            response.data.data.children.slice(-1)[0].data.created_utc;
          const minuteDifference = Math.floor(
            (firstPostUtc - lastPostUtc) / 60
          );

          setMinutes([minuteDifference]);
          const posts = response.data.data.children.map(
            (innerArray) => innerArray.data.body
          );

          const allPosts = posts.join(" -!@- ");
          const upperCaseWords = allPosts.match(/(\b[A-Z][A-Z]+|\b[A-Z]\b)/g);

          let potentialSymbols = [];
          let i;
          for (i = 0; i < upperCaseWords.length; i++) {
            if (upperCaseWords[i].length === 1 || 2 || 3 || 4) {
              potentialSymbols.push(upperCaseWords[i]);
            }
          }

          const symbolCounter = potentialSymbols.reduce((obj, e) => {
            obj[e] = (obj[e] || 0) + 1;
            return obj;
          }, {});

          let sortedSymbols = [];
          for (let occurence in symbolCounter) {
            sortedSymbols.push([occurence, symbolCounter[occurence]]);
          }

          sortedSymbols
            .sort(function (a, b) {
              return a[1] - b[1];
            })
            .reverse();

          const limitSymbols = sortedSymbols.slice(0, 10);

          setOccurences(limitSymbols.flat());
          limitSymbols.map((symbol) =>
            axios
              .get(
                `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol[0]}&contractType=ALL&strikeCount=2&includeQuotes=TRUE&toDate=${process.env.REACT_APP_DATE}&range=OTM`
              )
              .then((response) => {
                if (response.data.status === "SUCCESS") {
                  wsbDataArray.push(response.data);
                }
                setMarketData([wsbDataArray]);
              })
          );
        });
    } else {
      axios
        .get(
          handleThreadChange === "Weekend"
            ? `https://www.reddit.com/r/wallstreetbets/comments/${process.env.REACT_APP_WKND_KEY}/weekend_discussion_thread_for_the_weekend_of.json?limit=1000`
            : `https://www.reddit.com/r/wallstreetbets/comments/${process.env.REACT_APP_DD_KEY}/daily_discussion_thread_for_${monthNames[month]}_${day}_2021.json?limit=1000`
        )
        .then((response) => {
          const getMostRecentUtc =
            response.data[1].data.children[1].data.created_utc;

          const getLastPost = response.data[1].data.children.slice(-2);

          const lastPostUtc = getLastPost[0].data.created_utc;

          const minuteDifference = Math.floor(
            (getMostRecentUtc - lastPostUtc) / 60
          );

          setMinutes([minuteDifference]);

          const posts = response.data[1].data.children.map(
            (innerArray) => innerArray.data.body
          );

          const allPosts = posts.join(" -!@- ");
          const upperCaseWords = allPosts.match(/(\b[A-Z][A-Z]+|\b[A-Z]\b)/g);

          let potentialSymbols = [];
          let i;
          for (i = 0; i < upperCaseWords.length; i++) {
            if (
              upperCaseWords[i].length === 1 ||
              upperCaseWords[i].length === 2 ||
              upperCaseWords[i].length === 3 ||
              upperCaseWords[i].length === 4
            ) {
              potentialSymbols.push(upperCaseWords[i]);
            }
          }

          const filteredSyms = potentialSymbols.filter(function (value) {
            if (
              value !== "I" &&
              value !== "TO" &&
              value !== "THE" &&
              value !== "AND" &&
              value !== "EOD" &&
              value !== "WSB" &&
              value !== "EPS" &&
              value !== "EST" &&
              value !== "OTM" &&
              value !== "AH"
            ) {
              return value;
            } else {
              return false;
            }
          });

          const symbolCounter = filteredSyms.reduce((obj, e) => {
            obj[e] = (obj[e] || 0) + 1;
            return obj;
          }, {});

          let sortedSymbols = [];
          for (let occurence in symbolCounter) {
            sortedSymbols.push([occurence, symbolCounter[occurence]]);
          }

          sortedSymbols
            .sort(function (a, b) {
              return a[1] - b[1];
            })
            .reverse();

          const limitSymbols = sortedSymbols.slice(0, 10);

          setOccurences(limitSymbols.flat());

          limitSymbols.map((symbol) =>
            axios
              .get(
                `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol[0]}&contractType=ALL&strikeCount=2&includeQuotes=TRUE&toDate=${process.env.REACT_APP_DATE}&range=OTM`
              )
              .then((response) => {
                if (response.data.status === "SUCCESS") {
                  wsbDataArray.push(response.data);
                }
                setMarketData([wsbDataArray]);
              })
          );
        });
    }
  }, [handleThreadChange]);

  return (
    <>
      <SectorHeader style={{ marginLeft: "1%" }}>
        Tickers Trending on Reddit - WSB
      </SectorHeader>
      <WsbButtonContainer>
        <Button
          className={
            handleThreadChange === "Daily"
              ? theme.name === "dark"
                ? classes.wsbButtonDark
                : classes.wsbButtonLight
              : theme.name === "dark"
              ? classes.wsbButtonDarkUns
              : classes.wsbButtonLightUns
          }
          type="submit"
          size="small"
          onClick={buttonHandlerDaily}
          style={{ marginLeft: "3%" }}
        >
          <strong>Daily Discussion</strong>
        </Button>
        <Button
          className={
            handleThreadChange === "All"
              ? theme.name === "dark"
                ? classes.wsbButtonDark
                : classes.wsbButtonLight
              : theme.name === "dark"
              ? classes.wsbButtonDarkUns
              : classes.wsbButtonLightUns
          }
          type="submit"
          size="small"
          onClick={buttonHandlerAll}
          style={{ marginLeft: "3%" }}
        >
          <strong>WSB All</strong>
        </Button>
        <Button
          className={
            handleThreadChange === "Weekend"
              ? theme.name === "dark"
                ? classes.wsbButtonDark
                : classes.wsbButtonLight
              : theme.name === "dark"
              ? classes.wsbButtonDarkUns
              : classes.wsbButtonLightUns
          }
          type="submit"
          size="small"
          onClick={buttonHandlerWeekend}
          style={{ marginLeft: "3%" }}
        >
          <strong>Weekend Discussion</strong>
        </Button>
      </WsbButtonContainer>
      <WsbSubHeader>
        {handleThreadChange === "All"
          ? "Recent posts from all threads"
          : handleThreadChange === "Weekend"
          ? "Posts from the most recent Weekend Discussion Thread"
          : "Posts from today's Daily Discussion Thread"}
      </WsbSubHeader>
      <br></br>
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
                <i>
                  {occurences[occurences.indexOf(option.symbol) + 1]} mention(s)
                  in last {minutes} minutes
                </i>
                <MapCardHeader option={option} />
                <MapDataPoints option={option} mapType={"call"} />
              </Card>
            ) : (
              ""
            )
          )
        )
      ) : (
        <SectorHeader>scanning...</SectorHeader>
      )}

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
        " "
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
                  <i>
                    {occurences[occurences.indexOf(option.symbol) + 1]}{" "}
                    mention(s) in last {minutes} minutes
                  </i>
                  <MapCardHeader option={option} />

                  <MapDataPoints option={option} mapType={"put"} />
                </Card>
              ) : (
                ""
              )
            )
          )
        : " "}
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
        " "
      )}
    </>
  );
}
export default TrendingWsb;
