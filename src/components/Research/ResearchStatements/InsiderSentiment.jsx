import React, { useState, useEffect } from "react";
import {
  SummaryDataContainer,
  SummaryDataHeader,
  SummaryDataSubContainer,
} from "../../Styles/styledElements";
import BarChart from "../../Charts/BarChart";
import MuiDropdown from "../../Styles/MuiComponents/MuiDropdown";

const today = new Date();

const checkDate = new Date("2022-04-05 18:37:56");
const InsiderSentiment = ({ insiderData }) => {
  const [totalAcquisitions, setTotalAcquisitions] = useState(null);
  const [totalDispositions, setTotalDispositions] = useState(null);
  const [daysRange, setDaysRange] = useState(null);
  const sentimentTimeFrames = [7, 30, 60, 90];
 
  const handleSelectedDaysRange = (event) => {
    setDaysRange(event.target.value);
  };
  

  console.log("check date", checkDate);
  function subtractDays(date, days) {
    const result = date;
    result.setDate(result.getDate() - days);
    return result;
  }
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
    } else {
      const acquisitionOccurencesWithRange = insiderData.reduce(
        (acc, cur) =>
          cur.acquistionOrDisposition === "A" &&
          new Date(cur.transactionDate).getTime() >=
            subtractDays(today, daysRange)
            ? ++acc
            : acc,
        0
      );
      const dispositionOccurencesWithRange = insiderData.reduce(
        (acc, cur) =>
          cur.acquistionOrDisposition === "D" &&
          new Date(cur.transactionDate).getTime() >=
            subtractDays(today, daysRange)
            ? ++acc
            : acc,
        0
      );
      setTotalAcquisitions(acquisitionOccurencesWithRange);
      setTotalDispositions(dispositionOccurencesWithRange);
    }
  }, [insiderData, daysRange]);

  
  console.log("days range", daysRange);
  console.log("acq", totalAcquisitions);

  let barChartData = [
    { acqOrDispTotal: totalAcquisitions },
    { acqOrDispTotal: totalDispositions },
  ];
 
  return (
    <>
      <SummaryDataContainer>
        <SummaryDataHeader>Insider Trades Sentiment</SummaryDataHeader>
        <br></br>
        <br></br>
        <MuiDropdown
          menuItemValues={sentimentTimeFrames}
          inputLabel={"Trades for previous"}
          onChange={handleSelectedDaysRange}
          value={daysRange}
          labelFiller={"days"}
        />
        {/* <SummaryDataSubContainer>Last 30 Days</SummaryDataSubContainer>
        <SummaryDataSubContainer>Last 60 Days</SummaryDataSubContainer> */}
        {/* <SummaryDataSubContainer>{selectedYear}</SummaryDataSubContainer> */}
      </SummaryDataContainer>
      {totalAcquisitions ? (
        <BarChart
          chartData={barChartData}
          labels={["Acquisitions", "Dispositions"]}
          legend={"Total"}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default InsiderSentiment;
