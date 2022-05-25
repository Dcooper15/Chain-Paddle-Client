import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { UserData } from "./DummyData";
import { Chart as ChartJS } from "chart.js/auto";
import "./Charts.css";

const BarChart = ({ chartData, labels, legend }) => {
  //   let myData = chartData;
  //   const [barchartData, setBarchartData] = useState({
  //     labels: ["Acquisitions", "Dispositions"],
  //     datasets: [
  //       {
  //         key: myData,
  //         label: "Total",
  //         data: myData.map((data) => data.acqOrDispTotal),
  //         backgroundColor: ["gold"],
  //         color: "gold",
  //       },
  //     ],
  //   });

  let barchartData = {
    labels: labels,
    datasets: [
      {
        key: chartData,
        label: legend,
        data: chartData.map((data) => data.acqOrDispTotal),
        backgroundColor: ["gold"],
        color: "gold",
      },
    ],
  };

  //     useEffect(() => {

  //       setBarchartData(myData);
  //     }, [myData]);
  //   console.log("bar", barchartData);

  return (
    <>
      {chartData.length ? (
        <div style={{ width: 300 }}>
          <Bar
            data={barchartData}
            options={{ indexAxis: "y", color: "gold" }}
          ></Bar>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default BarChart;
