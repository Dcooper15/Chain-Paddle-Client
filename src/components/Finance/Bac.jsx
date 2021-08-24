import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Card } from "@material-ui/core";

const url = `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=BAC&contractType=CALL&strikeCount=1&optionType=CALL&expMonth=${process.env.REACT_APP_MONTH}&toDate=${process.env.REACT_APP_DATE}&range=OTM`
function Bac() {
    const [bac, setBacData] = useState([]);
       
    
      useEffect(() => {
        axios.get(url).then((response) => {
          setBacData([response.data]);
          
        });
      },[]
      )
      
  
  return(
  <>
            
            
            
    {!!bac.length ? ( bac.map(option => (
      <Card className="stockInfo" variant="outlined"
        style={{backgroundColor: "#6d76f7", color: '#fff', borderRadius: '15px'}}>
          <i><strong>Bank of America</strong></i>
            <hr></hr>
            <i key={option.index}>
            {option.symbol}</i>
          <br></br>
            <i>Stock Price:{" "}
            ${option.underlyingPrice.toFixed(2)}</i>
          <br></br>
            <i> Cost for 100 shares: $
            {option.underlyingPrice.toFixed(0) * 100}</i>
          <br></br>
            <i>Bid Price: $
            {Object.keys(option.callExpDateMap).map((entry) => {
            return Object.keys(
            option.callExpDateMap[entry]
            ).map((innerArrayID) =>
            option.callExpDateMap[entry][innerArrayID][0].bid.toFixed(2)
            );
            })}{" "}</i>
          <br></br>
            <i>Premium collected: $
            {Object.keys(option.callExpDateMap).map((entry) => {
            return Object.keys(option.callExpDateMap[entry]).map(
            (innerArrayID) =>
            option.callExpDateMap[entry][innerArrayID][0].bid.toFixed(
            2) * 100
            );
            })}
            </i>
      </Card>
            ))
          ) : (
            <p>loading data...</p>
          )} 

  </>
        );

};


export default Bac;