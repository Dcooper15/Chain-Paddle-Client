// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import Moment from "react-moment";
// import { Card } from "@material-ui/core";
// import Symbol from "../DataPoints/Symbol";
// import StockPrice from "../DataPoints/StockPrice";
// import HundredShares from "../DataPoints/HundredShares";
// import BidPrice from "../DataPoints/BidPrice";
// import PremiumCollected from "../DataPoints/PremiumCollected";
// import OpenInterest from "../DataPoints/OpenInterest";
// import Volatility from "../DataPoints/Volatility";
// import DaysToExpiration from "../DataPoints/DaysToExpiration";
// function wsb() {
//     axios.get(`https://apewisdom.io/api/v1.0/filter/stocks/page/1`).then((response) => {
//       ;
//       console.log("wsb", response.data);
//     })
//   }
// //const moverUrl = `https://api.tdameritrade.com/v1/marketdata/$COMPX/movers?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&direction=up&change=percent`;
// const date = new Date();

// function COMPX() {
//   const [percentChange, setPercentChange] = useState([]);
//   const [compxData, setCompxData] = useState([]);
//   console.log("Percent array", percentChange);
//   console.log("COMPXDATA", compxData);
//   useEffect(() => {
//     const compxDataArray = [];
//     axios
//       .get(
//         `https://api.tdameritrade.com/v1/marketdata/$COMPX/movers?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&direction=up&change=percent`
//       )
//       .then((response) => {
//         const changePercentArray = response.data
//           .map((percent) => [percent.symbol, percent.change])
//           .flat();
        
//         setPercentChange(changePercentArray);
        
//         const compxMoversArray = response.data.map(
//           (compxSymbol) => compxSymbol.symbol
//         );
//         compxMoversArray.map((symbol) =>
//           axios
//             .get(
//               `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&contractType=CALL&strikeCount=1&optionType=CALL&expMonth=${process.env.REACT_APP_MONTH}&toDate=2022-09-04&range=OTM`
//             )
//             .then((response) => {
//               if (response.data.status === "SUCCESS") {
//                 compxDataArray.push(response.data);
//               }
//               setCompxData([compxDataArray]);
//             })
//         );
//       });
//   }, []);

//   return (
//     <>
//       <h5 className="sectorHeader">
//         <Link to="/topmovers" style={{ color: "#fff" }}>
//           Return to Top Movers
//         </Link>
//       </h5>
//       <h2>Today's Top Movers - NASDAQ</h2>

//       {!!compxData.length ? (
//         compxData.map((stock) =>
//           stock.map((option) => (
//             <Card
//               className="stockInfo"
//               variant="outlined"
//               style={{
//                 backgroundColor: "#6d76f7",
//                 color: "#fff",
//                 borderRadius: "15px",
//               }}
//             >
//             <Link to={`/chain/${option.symbol}`} style={{ textDecoration: 'underline', color: '#38ecf2' }}>
//             <Symbol option={option}/>
//           </Link>
//               <>{"   "}Up{" "}
//               {percentChange[percentChange.indexOf(option.symbol) + 1].toFixed(
//                 4
//               ) * 100}
//               %</>
           
//               <br></br>
//               <StockPrice option={option} />
//               <br></br>
//               <HundredShares option={option} />
//               <br></br>
//               <BidPrice option={option} />
//               <br></br>
//               <PremiumCollected option={option} />
//               <br></br>
//               <OpenInterest option={option} />
//               <br></br>
//               <Volatility option={option} />
//               <br></br>
//               <DaysToExpiration option={option} />
//               <br></br>
//               <>Expiration Date: </>
//               <>
//                 <Moment
//                   add={{
//                     days: Object.keys(option.callExpDateMap).map((entry) => {
//                       return Object.keys(option.callExpDateMap[entry]).map(
//                         (innerArrayID) =>
//                           option.callExpDateMap[entry][innerArrayID][0]
//                             .daysToExpiration
//                       );
//                     })[0],
//                   }}
//                   format="MMM DD"
//                 >
//                   {date}
//                 </Moment>
//               </>
//             </Card>
//           ))
//         )
//       ) : (
//         <p>loading data...</p>
//       )}
//     </>
//   );
// }

// export default COMPX;