import React, { useState, useEffect } from "react";
import {
  SummaryDataContainer,
  SummaryDataHeader,
  //SummaryDataSubContainer,
  KpiContainer,
  KpiRow,
} from "../../Styles/styledElements";
// import MuiDropdown from "../../Styles/MuiComponents/MuiDropdown";
import KpiValue from "../../KPIs/KpiValue";

//const today = new Date();

//const checkDate = new Date("2022-04-05 18:37:56");
const InsiderSentiment = ({ insiderData }) => {
  const [totalAcquisitions, setTotalAcquisitions] = useState(null);
  const [totalDispositions, setTotalDispositions] = useState(null);
  const [totalTrades, setTotalTrades] = useState(null);
  //const [daysRange, setDaysRange] = useState(null);
  //const sentimentTimeFrames = [7, 30, 60, 90];

  //   const handleSelectedDaysRange = (event) => {
  //     setDaysRange(event.target.value);
  //   };

//   function subtractDays(date, days) {
//     const result = date;
//     result.setDate(result.getDate() - days);
//     return result;
//   }
const daysRange = null;
  useEffect(() => {
    if (
      daysRange
      === null
    ) {
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
      //   const acquisitionOccurencesWithRange = insiderData.reduce(
      //     (acc, cur) =>
      //       cur.acquistionOrDisposition === "A" &&
      //       new Date(cur.transactionDate).getTime() >=
      //         subtractDays(today, daysRange)
      //         ? ++acc
      //         : acc,
      //     0
      //   );
      //   const dispositionOccurencesWithRange = insiderData.reduce(
      //     (acc, cur) =>
      //       cur.acquistionOrDisposition === "D" &&
      //       new Date(cur.transactionDate).getTime() >=
      //         subtractDays(today, daysRange)
      //         ? ++acc
      //         : acc,
      //     0
      //   );
      //   setTotalAcquisitions(acquisitionOccurencesWithRange);
      //   setTotalDispositions(dispositionOccurencesWithRange);
      //   setTotalTrades(
      //     acquisitionOccurencesWithRange + dispositionOccurencesWithRange
      //   );
    }
  }, [
    insiderData,
    //daysRange
  ]);

  return (
    <>
      <SummaryDataContainer>
        <SummaryDataHeader>Insider Trades Sentiment</SummaryDataHeader>
        <br></br>
        {/* <MuiDropdown
          menuItemValues={sentimentTimeFrames}
          inputLabel={"Trades for previous"}
          onChange={handleSelectedDaysRange}
          value={daysRange}
          labelFiller={"days"}
        /> */}
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
