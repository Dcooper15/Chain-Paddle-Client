import React from "react";
import {
  StyledCardHeader,
  StyledName,
  StyledSymbolLink,
  StyledStockPrice,
  CardRow,
} from "../Styles/styledElements";
import { Button } from "@material-ui/core";
import Name from "./Name";
import Symbol from "./Symbol";
import StockPrice from "./StockPrice";
import StockPercentChange from "./StockPercentChange";
import { HiLink } from "react-icons/hi";



const MapCardHeader = ({ option }) => {
  return (
    <>
      <StyledCardHeader>
        <CardRow>
          <StyledSymbolLink to={`/chain/${option.symbol}`}>
            <Symbol option={option} />
          </StyledSymbolLink>
          <StyledStockPrice>
            <StockPrice option={option} />
          </StyledStockPrice>

          <StockPercentChange option={option} />

          <Button type="submit" size="small" style={{ padding: "0" }}>
            <StyledSymbolLink to={`/chain/${option.symbol}`}>
              <HiLink
                style={{
                  fontSize: "14px",
                  boxShadow: "0 3px 5px 2px rgba(212, 175, 55, .5)",
                }}
              />
            </StyledSymbolLink>
          </Button>
         
        </CardRow>
        <StyledName>
          <Name namesRender={option.underlying.description} />
        </StyledName>
      </StyledCardHeader>
    </>
  );
};

export default MapCardHeader;
