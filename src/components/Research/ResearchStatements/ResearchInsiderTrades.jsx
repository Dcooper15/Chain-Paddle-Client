import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { ThemeContext } from "styled-components";
import { Button } from "@material-ui/core";
import axios from "axios";
//import { uuid } from "uuidv4";
import { StyledResearchIncStateYears } from "../../Styles/styledElements";
import InsiderTradesCard from "./InsiderTradesCard";
import { useStyles } from "../../Styles/muiStyles";
import { FixedSizeList } from "react-window";

//const addCommas = /\B(?=(\d{3})+(?!\d))/g;

const InsiderTrading = ({ submittedText, dataSelection,
isEmptyInsiderTrades }) => {
  const classes = useStyles();
  const theme = useContext(ThemeContext);
  const isMounted = useRef(false);
  const [insiderData, setInsiderData] = useState([]);
  const [insiderYears, setInsiderYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState([]);

  useEffect(() => {
    if (isMounted.current) {
      axios
        .get(
          `https://${process.env.REACT_APP_HUB_URL}/api/v4/insider-trading?symbol=${submittedText}&limit=250&apikey=${process.env.REACT_APP_FM_CLIENT_ID}`
        )
        .then((response) => {
          if (!response.data.length) {
            isEmptyInsiderTrades(true);
          } else {
            isEmptyInsiderTrades(false);
          }
          const returnYears = response.data.map((years) =>
            years.transactionDate.slice(0, 4)
          );
          const uniqueYears = [...new Set(returnYears)];
          setInsiderYears(uniqueYears);
          setInsiderData(response.data);
          setSelectedYear([]);
        });
    } else {
      isMounted.current = true;
    }
  }, [submittedText, isEmptyInsiderTrades]);

  const Row = useCallback(
    ({ index, style }) => {
      const {
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
        formType,
      } =
        insiderData.filter(
          (trade) => trade.transactionDate.slice(0, 4) === selectedYear
        )[index] || {};
      return (
        <div style={style}>
          <InsiderTradesCard
            // key={uuid()}
            transactionDate={transactionDate}
            filingDate={filingDate}
            acquistionOrDisposition={acquistionOrDisposition}
            transactionType={transactionType}
            securityName={securityName}
            price={price}
            reportingName={reportingName}
            securitiesOwned={securitiesOwned}
            securitiesTransacted={securitiesTransacted}
            typeOfOwner={typeOfOwner}
            formType={formType}
          />
        </div>
      );
    },
    [insiderData, selectedYear]
  );

  try {
    return (
      <>
        {!!insiderYears.length
          ? insiderYears.map((year) => (
              <StyledResearchIncStateYears dataSelection={dataSelection}>
                <Button
                  className={classes.buttonExp}
                  value={year}
                  size="small"
                  onClick={() => setSelectedYear(year)}
                  style={{
                    background:
                      year === selectedYear
                        ? theme.name === "dark"
                          ? "black"
                          : "white"
                        : "none",
                    marginBottom: "0",
                    color: theme.name === "dark" ? "#d4af37" : "#146175",
                  }}
                >
                  {year}
                </Button>
              </StyledResearchIncStateYears>
            ))
          : ""}
        {!!insiderData.length &&
        dataSelection === "insider trades" &&
        selectedYear.length ? (
          <FixedSizeList
            height={500}
            width={"100%"}
            itemSize={290}
            itemCount={insiderData.length}
          >
            {Row}
          </FixedSizeList>
        ) : (
          ""
        )}
      </>
    );
  } catch (err) {
    console.log(err.message);
    return <></>;
  }
};

export default InsiderTrading;
