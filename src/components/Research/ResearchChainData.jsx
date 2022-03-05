import React, { useState, useEffect, useContext, useRef } from "react";
import { ThemeContext } from "styled-components";
import { StyledChainError } from "../Styles/styledElements";
import { useStyles } from "../Styles/muiStyles";
import axios from "axios";
import { Card } from "@material-ui/core";
import MapDataPoints from "../DataPoints/MapDataPoints";
import MapCardHeader from "../DataPoints/MapCardHeader";

const date = new Date();
const ResearchChainData = ({ submittedText }) => {
  const classes = useStyles();
  const theme = useContext(ThemeContext);
  const isMounted = useRef(false);
  const [chainData, setChainData] = useState([]);
  const [chainError, setChainError] = useState([]);

  const getCardStyle =
    theme.name === "dark"
      ? {
          backgroundColor: "#3D3D3D",
          borderColor: "#d4af37",
          color: "#ffebcd",
        }
      : {
          backgroundColor: "#ebebeb",
          borderColor: "#00afc9",
          color: "#002933",
        };

  useEffect(() => {
    if (isMounted.current) {
      setChainError([]);
      axios
        .get(
          `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${submittedText}&contractType=ALL&strikeCount=2&includeQuotes=TRUE&toDate=${process.env.REACT_APP_DATE}&range=OTM`
        )
        .then((response) => {
          response.data.status === "FAILED"
            ? setChainError("error")
            : setChainData([response.data]);
        });
    } else {
      isMounted.current = true;
    }
  }, [submittedText]);

  return (
    <div>
      {chainError === "error" ? (
        <StyledChainError>
          No option chain data for {submittedText}
        </StyledChainError>
      ) : !!chainData.length ? (
        chainData.map((option) => (
          <Card
            className={classes.card}
            style={getCardStyle}
            variant="outlined"
            //hidden={handleTypeChange === true}
            raised={true}
          >
            {" "}
            <MapCardHeader option={option} />
            <MapDataPoints option={option} mapType={"call"} />
          </Card>
        ))
      ) : (
        ""
      )}
    </div>
  );
};

export default ResearchChainData;
