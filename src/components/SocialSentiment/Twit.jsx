import React, { useState, useEffect, useContext, useRef, useMemo } from "react";
import { ThemeContext } from "styled-components";
import {
  SectorHeader,
  TwitterStwitsFilterContainer,
  StyledMenuItem,
  ImpressionsContainer,
} from "../Styles/styledElements";
import { useStyles } from "../Styles/muiStyles";
import axios from "axios";
import {
  Card,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import MapDataPoints from "../DataPoints/MapDataPoints";
import MapCardHeader from "../DataPoints/MapCardHeader";
import GridToggle from "../Styles/MuiComponents/GridToggle";
import {
  useRecoilState,
  //useRecoilValue
} from "recoil";
import {
  dataDisplayState,
  //toggleDataDisplayState,
} from "../../recoil/atoms/globalState";
import DataGridDisplay from "../DataGrid/DataGridDisplay";


const addCommas = /\B(?=(\d{3})+(?!\d))/g;

const Twit = () => {
  const classes = useStyles();
  const theme = useContext(ThemeContext);
  const isMounted = useRef(false);
  const [sentimentData, setSentimentData] = useState([]);
  const [twitterImpressionsData, setTwitterImpressionsData] = useState([]);
  const [twitterPostData, setTwitterPostsData] = useState([]);
  const [twitterCommentsData, setTwitterCommentsData] = useState([]);
  const [stockTwitsImpressionsData, setStockTwitImpressionsData] = useState([]);
  const [stockTwitPostsData, setStockTwitPostsData] = useState([]);
  const [stockTwitCommentsData, setStockTwitsCommentData] = useState([]);
  const [selectedData, setSelectedData] = useState(false);
  const [open, setOpen] = useState(false);
  const [handleTypeChange, setHandleTypeChange] = useState(false);
  const [occurences, setOccurences] = useState([]);
  const [showGridData, setShowGridData] = useRecoilState(dataDisplayState);
  const toggleGrid = () => setShowGridData(!showGridData);

  const handleSelectedDataChange = (event) => {
    setSelectedData(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const buttonHandlerPut = () => {
    setHandleTypeChange(true);
  };
  const buttonHandlerCall = () => {
    setHandleTypeChange(false);
  };

  let selectedOptionData = useMemo(() => [], []);
  switch (selectedData) {
    case 1:
      selectedOptionData = twitterImpressionsData;
      break;
    case 2:
      selectedOptionData = twitterPostData;
      break;
    case 3:
      selectedOptionData = twitterCommentsData;
      break;
    case 4:
      selectedOptionData = stockTwitsImpressionsData;
      break;
    case 5:
      selectedOptionData = stockTwitPostsData;
      break;
    case 6:
      selectedOptionData = stockTwitCommentsData;
      break;

    default:
      selectedOptionData = "";
  }

  const getOccurenceValue = (symbol, selectedThread, occurences) => {
    if (selectedThread === 1) {
      return (
        "has made " +
        occurences[occurences.indexOf(symbol) + 8]
          .toString()
          .replace(addCommas, ",") +
        " Twitter Impressions today"
      );
    } else if (selectedThread === 2) {
      return (
        "has been in " +
        occurences[occurences.indexOf(symbol) + 2]
          .toString()
          .replace(addCommas, ",") +
        " Twitter posts today"
      );
    } else if (selectedThread === 3) {
      return (
        "has been in " +
        occurences[occurences.indexOf(symbol) + 4]
          .toString()
          .replace(addCommas, ",") +
        " Twitter comments today"
      );
    } else if (selectedThread === 4) {
      return (
        "has made " +
        occurences[occurences.indexOf(symbol) + 7]
          .toString()
          .replace(addCommas, ",") +
        " Stocktwits impressions today"
      );
    } else if (selectedThread === 5) {
      return (
        "has been in " +
        occurences[occurences.indexOf(symbol) + 1]
          .toString()
          .replace(addCommas, ",") +
        " Stocktwits posts today"
      );
    } else if (selectedThread === 6) {
      return (
        "has been in " +
        occurences[occurences.indexOf(symbol) + 3]
          .toString()
          .replace(addCommas, ",") +
        " Stocktwits comments today"
      );
    }
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
    axios
      .get(
        `https://financialmodelingprep.com/api/v4/social-sentiment/trending?apikey=${process.env.REACT_APP_FM_CLIENT_ID}`
      )
      .then((response) => {
        const filterSyms = response.data.filter(
          (element) => element.symbol.includes("-") === false
        );

        const topTenTwitterPosts = filterSyms
          .sort((a, b) => (a.twitterPosts > b.twitterPosts ? 1 : -1))
          .reverse()
          .slice(0, 10);
        const topTenTwitterComments = filterSyms
          .sort((a, b) => (a.twitterComments > b.twitterComments ? 1 : -1))
          .reverse()
          .slice(0, 10);
        const topTenTwitterImpressions = filterSyms
          .sort((a, b) =>
            a.twitterImpressions > b.twitterImpressions ? 1 : -1
          )
          .reverse()
          .slice(0, 10);
        const topTenStockTwitsImpressions = filterSyms
          .sort((a, b) =>
            a.stocktwitsImpressions > b.stocktwitsImpressions ? 1 : -1
          )
          .reverse()
          .slice(0, 10);
        const topTenStockTwitsPosts = filterSyms
          .sort((a, b) => (a.stocktwitsPosts > b.stocktwitsPosts ? 1 : -1))
          .reverse()
          .slice(0, 10);
        const topTenStockTwitsComments = filterSyms
          .sort((a, b) =>
            a.stocktwitsComments > b.stocktwitsComments ? 1 : -1
          )
          .reverse()
          .slice(0, 10);

        setTwitterImpressionsData(topTenTwitterImpressions);
        setTwitterPostsData(topTenTwitterPosts);
        setTwitterCommentsData(topTenTwitterComments);
        setStockTwitImpressionsData(topTenStockTwitsImpressions);
        setStockTwitPostsData(topTenStockTwitsPosts);
        setStockTwitsCommentData(topTenStockTwitsComments);
      });
  }, []);

  useEffect(() => {
    const sentimentDataArray = [];

    if (isMounted.current) {
      selectedOptionData.map((element) =>
        axios
          .get(
            `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${element.symbol}&contractType=ALL&strikeCount=2&includeQuotes=TRUE&toDate=${process.env.REACT_APP_DATE}&range=OTM`
          )
          .then((response) => {
            if (response.data.status === "SUCCESS") {
              sentimentDataArray.push(response.data);
            }
            setOccurences(selectedOptionData.map(Object.values).flat());
            setSentimentData([sentimentDataArray]);
          })
      );
    } else {
      isMounted.current = true;
    }
  }, [selectedOptionData]);

  return (
    <>
      <SectorHeader>Tickers Trending on Twitter & StockTwits</SectorHeader>
      <TwitterStwitsFilterContainer>
        <FormControl className={classes.formControl}>
          <InputLabel
            id="dataSelectLabel"
            className={classes.twitterStwitsLabel}
          >
            <strong
              style={{ color: theme.name === "dark" ? "#d4af37" : "#146175" }}
            >
              Search Options By Most
            </strong>
          </InputLabel>

          <Select
            labelId="dataSelectLabel"
            id="twitterStwitsSelect"
            className={
              open === true || selectedData !== false
                ? classes.twitterStwitsSelect
                : classes.twitterStwitsSelectInactive
            }
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={selectedData === false ? "" : selectedData}
            onChange={handleSelectedDataChange}
          >
            <MenuItem className={classes.menuItem} value={1}>
              <StyledMenuItem>Twitter Impressions</StyledMenuItem>
            </MenuItem>
            <MenuItem className={classes.menuItem} value={2}>
              <StyledMenuItem>Twitter Posts</StyledMenuItem>
            </MenuItem>
            <MenuItem className={classes.menuItem} value={3}>
              <StyledMenuItem>Twitter Comments</StyledMenuItem>
            </MenuItem>
            <MenuItem className={classes.menuItem} value={4}>
              <StyledMenuItem>Stocktwits Impressions</StyledMenuItem>
            </MenuItem>
            <MenuItem className={classes.menuItem} value={5}>
              <StyledMenuItem>Stocktwits Posts</StyledMenuItem>
            </MenuItem>
            <MenuItem className={classes.menuItem} value={6}>
              <StyledMenuItem>Stocktwits Comments</StyledMenuItem>
            </MenuItem>
          </Select>
        </FormControl>
      </TwitterStwitsFilterContainer>
      {sentimentData.length ? (
        <>
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
        </>
      ) : (
        ""
      )}

      {!!sentimentData.length
        ? sentimentData.map((stock) =>
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
                  <ImpressionsContainer>
                    {" "}
                    {option.symbol +
                      " " +
                      getOccurenceValue(
                        option.symbol,
                        selectedData,
                        occurences
                      )}
                  </ImpressionsContainer>
                  <MapCardHeader option={option} />

                  <MapDataPoints option={option} mapType={"call"} />
                </Card>
              ) : (
                ""
              )
            )
          )
        : ""}
      {!!sentimentData.length ? (
        showGridData && !handleTypeChange ? (
          <DataGridDisplay
            option={
              !!sentimentData.length
                ? sentimentData.map((stock) => stock.map((option) => option))
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
      {!!sentimentData.length
        ? sentimentData.map((stock) =>
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
                  <ImpressionsContainer>
                    {" "}
                    {option.symbol +
                      " " +
                      getOccurenceValue(
                        option.symbol,
                        selectedData,
                        occurences
                      )}
                  </ImpressionsContainer>
                  <MapCardHeader option={option} />

                  <MapDataPoints option={option} mapType={"put"} />
                </Card>
              ) : (
                ""
              )
            )
          )
        : " "}
      {!!sentimentData.length ? (
        showGridData && handleTypeChange ? (
          <DataGridDisplay
            option={
              !!sentimentData.length
                ? sentimentData.map((stock) => stock.map((option) => option))
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
};

export default Twit;
