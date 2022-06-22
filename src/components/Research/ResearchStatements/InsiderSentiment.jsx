import React, { useState, useEffect } from "react";
import {
  SummaryDataContainer,
  SummaryDataHeader,
  //SummaryDataSubContainer,
  KpiContainer,
  KpiRow,
} from "../../Styles/styledElements";
import {
  nowUnixSeconds,
  convertToUnixSeconds,
  subtractDaysFromUnix,
} from "../../Globals/globalFunctions";
import MuiDropdown from "../../Styles/MuiComponents/MuiDropdown";
import KpiValue from "../../KPIs/KpiValue";

const InsiderSentiment = ({ insiderData }) => {
  const [totalAcquisitions, setTotalAcquisitions] = useState(null);
  const [totalDispositions, setTotalDispositions] = useState(null);
  const [totalTrades, setTotalTrades] = useState(null);
  const [daysRange, setDaysRange] = useState(null);
  const sentimentTimeFrames = [7, 30, 60, 90, 180, 365];

  const handleSelectedDaysRange = (event) => {
    setDaysRange(event.target.value);
  };

  useEffect(() => {
    if (daysRange === null) {
      const acquisitionOccurences = insiderData.reduce(
        (acc, cur) => (cur.acquistionOrDisposition === "A" ? ++acc : acc),
        0
      );
      const dispositionOccurences = insiderData.reduce(
        (acc, cur) => (cur.acquistionOrDisposition === "D" ? ++acc : acc),
        0
      );
      setTotalAcquisitions(acquisitionOccurences);
      setTotalDispositions(dispositionOccurences);
      setTotalTrades(acquisitionOccurences + dispositionOccurences);
    } else {
      const filteredTradesByRange = insiderData.filter(
        (obj) =>
          convertToUnixSeconds(obj.transactionDate) >=
          subtractDaysFromUnix(nowUnixSeconds, daysRange)
      );

      const acquisitionOccurences = filteredTradesByRange.reduce(
        (acc, cur) => (cur.acquistionOrDisposition === "A" ? ++acc : acc),
        0
      );
      const dispositionOccurences = filteredTradesByRange.reduce(
        (acc, cur) => (cur.acquistionOrDisposition === "D" ? ++acc : acc),
        0
      );

      setTotalAcquisitions(acquisitionOccurences);
      setTotalDispositions(dispositionOccurences);
      setTotalTrades(acquisitionOccurences + dispositionOccurences);
    }
  }, [insiderData, daysRange]);

  return (
    <>
      <SummaryDataContainer>
        <SummaryDataHeader>Insider Trades Sentiment</SummaryDataHeader>
        <br></br>
        <MuiDropdown
          menuItemValues={sentimentTimeFrames}
          inputLabel={"Trades for previous"}
          onChange={handleSelectedDaysRange}
          value={daysRange}
          labelFiller={"days"}
        />
      </SummaryDataContainer>
      <KpiContainer>
        <KpiRow>
          <KpiValue description={"Trades"} value={totalTrades} />
          <KpiValue description={"Acquisitions"} value={totalAcquisitions} />
          <KpiValue description={"Dispositions"} value={totalDispositions} />
        </KpiRow>
      </KpiContainer>
    </>
  );
};

export default InsiderSentiment;
