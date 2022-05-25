import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import {
  IncStateContainer,
  IncStateHeader,
  IncStateValue,
} from "../../Styles/styledElements";
import { Card } from "@material-ui/core";
import { useStyles } from "../../Styles/muiStyles";
import Moment from "react-moment";

const InsiderTradesCard = ({
  transactionDate,
  filingDate,
  acquistionOrDisposition,
  transactionType,
  securityName,
  price,
  reportingName,
  securitiesOwned,
  securitiesTransacted,
  typeOfOwner,
  formType
  
}) => {
  const classes = useStyles();
  const theme = useContext(ThemeContext);

  const getCardColors =
    theme.name === "dark"
      ? {
          backgroundColor: "#38372b",
          marginBottom: '6%',
          color: "#ffebcd",
        }
      : {
          backgroundColor: "#f5f0f0",
          marginBottom: '6%',
          color: "#002933",
        };

  return (
    <Card
      className={classes.quoteCard}
      style={getCardColors}
      variant="outlined"
      raised={true}
    >
      <IncStateContainer>
        <IncStateHeader>Transaction Date</IncStateHeader>
        <IncStateValue>
          {transactionDate == null ? (
            "N/A"
          ) : (
            <Moment format="ll">{transactionDate}</Moment>
          )}
        </IncStateValue>
      </IncStateContainer>
      <IncStateContainer>
        <IncStateHeader>Filing Date</IncStateHeader>
        <IncStateValue>
          {filingDate == null ? (
            "N/A"
          ) : (
            <Moment format="ll">
              {filingDate.slice(0, filingDate.indexOf(" "))}
            </Moment>
          )}
        </IncStateValue>
      </IncStateContainer>
      <IncStateContainer>
        <IncStateHeader>Acquisition or Diposition</IncStateHeader>
        <IncStateValue>{acquistionOrDisposition ===
        null ? "N/A" :
        acquistionOrDisposition === "D" ?
        "Disposition" : "Aquisition"}</IncStateValue>
      </IncStateContainer>

      <IncStateContainer>
        <IncStateHeader>Transaction Type</IncStateHeader>
        <IncStateValue>{transactionType}</IncStateValue>
      </IncStateContainer>

      <IncStateContainer>
        <IncStateHeader>Security Type</IncStateHeader>
        <IncStateValue>{securityName}</IncStateValue>
      </IncStateContainer>
      <IncStateContainer>
        <IncStateHeader>Price</IncStateHeader>
        <IncStateValue>
          $
          {
            price
            // .toString().replace(addCommas, ",")
          }
        </IncStateValue>
      </IncStateContainer>
      <IncStateContainer>
        <IncStateHeader>Insider Name</IncStateHeader>
        <IncStateValue>{reportingName}</IncStateValue>
      </IncStateContainer>
      <IncStateContainer>
        <IncStateHeader>Securities Owned</IncStateHeader>
        <IncStateValue>
          {
            securitiesOwned
            // .toString()
            // .replace(addCommas, ",")
          }
        </IncStateValue>
      </IncStateContainer>
      <IncStateContainer>
        <IncStateHeader>Securities Transacted</IncStateHeader>
        <IncStateValue>
          {
            securitiesTransacted
            // .toString()
            // .replace(addCommas, ",")
          }
        </IncStateValue>
      </IncStateContainer>
      <IncStateContainer>
        <IncStateHeader>Type of Owner</IncStateHeader>
        <IncStateValue>{typeOfOwner}</IncStateValue>
      </IncStateContainer>
      <IncStateContainer>
        <IncStateHeader>Form Type</IncStateHeader>
        <IncStateValue>{formType}</IncStateValue>
      </IncStateContainer>
    </Card>
  );
};
export default InsiderTradesCard;
