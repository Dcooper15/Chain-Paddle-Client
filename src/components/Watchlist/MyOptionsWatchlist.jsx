import React, { useState, useEffect, useContext } from "react";
import {
  HomePageDiscussionHeaderContainer,
  HomePageOptionsWatchlistContainer,
} from "../Styles/styledElements";
import { useAuth0 } from "@auth0/auth0-react";
import { Card } from "@material-ui/core";
import axios from "axios";
import { ThemeContext } from "styled-components";
import { useStyles } from "../Styles/muiStyles";
import MapWatchlistData from "./MapWatchlistData";
import MapWatchlistCardHeader from "./MapWatchlistCardHeader";
import CallPutButtonGroup from "./CallPutButtonGroup";

const MyOptionsWatchlist = ({ displayWatchlist }) => {
  const { user } = useAuth0();
  const loggedInUser = user;
  const classes = useStyles();
  const theme = useContext(ThemeContext);

  const [callWatchlistData, setCallWatchlistData] = useState([]);
  const [putWatchlistData, setPutWatchlistData] = useState([]);
  const [isCall, setIsCall] = useState(true);

  const handleIsCall = () => {
    setIsCall(!isCall);
  };

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
    const callOptionsArray = [];
    const putOptionsArray = [];
    axios
      .get(
        `${process.env.REACT_APP_SERVER_ROUTE}/watchlist/userwatchlist/${loggedInUser.sub}`
      )
      .then((response) => {
        const optionsToQuery = response.data.map((query) => query);
        optionsToQuery.map((option) =>
          axios
            .get(
              `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${option.symbol}&contractType=${option.contract_type}&strikeCount=1
        
              &strike=${option.strike}&fromDate=${option.to_from_date}&toDate=${option.to_from_date}&includeQuotes=TRUE`
            )
            .then((response) => {
              if (
                response.data.status === "SUCCESS" &&
                option.contract_type === "CALL"
              ) {
                const sharePrice = response.data.underlyingPrice;
                callOptionsArray.push(
                  [
                    Object.keys(response.data.callExpDateMap)
                      .map((entry) => {
                        return Object.keys(
                          response.data.callExpDateMap[entry]
                        ).map(
                          (innerArrayID) =>
                            response.data.callExpDateMap[entry][innerArrayID]
                        );
                      })
                      .flat()

                      .flat(),
                    sharePrice,
                  ]
                    .flat()
                    .flat()
                );
              } else if (
                response.data.status === "SUCCESS" &&
                option.contract_type === "PUT"
              ) {
                const sharePricePut = response.data.underlyingPrice;
                putOptionsArray.push(
                  [
                    Object.keys(response.data.putExpDateMap)
                      .map((entry) => {
                        return Object.keys(
                          response.data.putExpDateMap[entry]
                        ).map(
                          (innerArrayID) =>
                            response.data.putExpDateMap[entry][innerArrayID]
                        );
                      })
                      .flat()
                      .flat(),
                    sharePricePut,
                  ]
                    .flat()
                    .flat()
                );
              }
              setCallWatchlistData(callOptionsArray);
              setPutWatchlistData(putOptionsArray);
            })
        );
      });
  }, [loggedInUser.sub]);

  //   return <>hi</>;
  return (
    <HomePageOptionsWatchlistContainer displayWatchlist={displayWatchlist}>
      <HomePageDiscussionHeaderContainer>
        My Watchlist
      </HomePageDiscussionHeaderContainer>
      {!!callWatchlistData.length ? (
        <CallPutButtonGroup handleIsCall={handleIsCall} isCall={isCall} />
      ) : (
        ""
      )}
      {!!callWatchlistData.length
        ? callWatchlistData.map((option) => (
            <Card
              key={option[0].description}
              className={classes.card}
              style={getCardColors}
              variant="outlined"
              raised={true}
              hidden={!isCall}
            >
              <MapWatchlistCardHeader option={option[0]} />

              <br></br>

              <MapWatchlistData
                option={option[0]}
                mapType={"call"}
                sharePrice={option[1]}
                strike={option[0].strikePrice}
                premium={option[0].mark * 100}
              />
            </Card>
          ))
        : " "}
      {!!putWatchlistData.length
        ? putWatchlistData.map((option) => (
            <Card
              key={option[0].description}
              className={classes.card}
              style={getCardColors}
              variant="outlined"
              raised={true}
              hidden={isCall}
            >
              <MapWatchlistCardHeader option={option[0]} />

              <br></br>
              <MapWatchlistData
                option={option[0]}
                sharePrice={option[1]}
                strike={option[0].strikePrice}
                premium={option[0].mark * 100}
                mapType={"put"}
              />
            </Card>
          ))
        : " "}
    </HomePageOptionsWatchlistContainer>
  );
};

export default MyOptionsWatchlist;
