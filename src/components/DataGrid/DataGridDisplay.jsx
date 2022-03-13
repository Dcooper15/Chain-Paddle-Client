import React, { useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { ThemeContext } from "styled-components";
import { DataGridContainer } from "../Styles/styledElements";
import {
  callIndexUnfixed,
  callIndex,
  putIndexUnfixed,
  putIndex,
} from "../Globals/globalFunctions";
import moment from "moment";

const DataGridDisplay = ({ option, mapType }) => {
  const theme = useContext(ThemeContext);

  const columns = [
    { field: "id", headerName: "Symbol", width: 65 },

    {
      field: "name",
      headerName: "Name",
      width: 115,
    },
    {
      field: "option",
      headerName: "Option",
      width: 100,
    },
    {
      field: "bidAsk",
      headerName: "Bid/Ask",
      width: 110,
      sortable: false,
    },
    {
      field: "premium",
      headerName: "Premium $",
      width: 110,
    },
    {
      field: "volume",
      headerName: "Volume",
      width: 80,
    },
    {
      field: "openInterest",
      headerName: "Open Interest",
      width: 105,
    },
    {
      field: "impliedVol",
      headerName: "Implied Vol.",
      width: 100,
    },
    {
      field: "daysExp",
      headerName: "Days/Exp",
      width: 80,
    },
    {
      field: "expDate",
      headerName: "Exp Date",
      width: 100,
    },
  ];

  const callRows = option[0]?.map((gridRow) => ({
    id: gridRow.symbol,
    name: gridRow.underlying.description
      ? gridRow.underlying.description
      : "N/A",
    option: `${callIndexUnfixed(gridRow, "strikePrice")} Call`,
    bidAsk: `${callIndex(gridRow, "bid", 2, 1)}/${callIndex(
      gridRow,
      "ask",
      2,
      1
    )}
   `,
    premium: `${callIndex(gridRow, "mark", 2, 100)}`,
    volume: callIndexUnfixed(gridRow, "totalVolume"),
    openInterest: callIndexUnfixed(gridRow, "openInterest"),
    impliedVol: callIndexUnfixed(gridRow, "volatility"),
    daysExp: callIndexUnfixed(gridRow, "daysToExpiration"),
    expDate: moment()
      .add(callIndexUnfixed(gridRow, "daysToExpiration"), "days")
      .format("MMM DD"),
  }));

  const putRows = option[0]?.map((gridRow) => ({
    id: gridRow.symbol,
    name: gridRow.underlying.description
      ? gridRow.underlying.description
      : "N/A",
    option: `${putIndexUnfixed(gridRow, "strikePrice")} Put`,
    bidAsk: `${putIndex(gridRow, "bid", 2, 1)}/${putIndex(gridRow, "ask", 2, 1)}
   `,
    premium: `${putIndex(gridRow, "mark", 2, 100)}`,
    volume: putIndexUnfixed(gridRow, "totalVolume"),
    openInterest: putIndexUnfixed(gridRow, "openInterest"),
    impliedVol: putIndexUnfixed(gridRow, "volatility"),
    daysExp: putIndexUnfixed(gridRow, "daysToExpiration"),
    expDate: moment()
      .add(putIndexUnfixed(gridRow, "daysToExpiration"), "days")
      .format("MMM DD"),
  }));

  return (
    <>
      <DataGridContainer style={{ height: 450 }}>
        <DataGrid
          rows={mapType === "call" ? callRows : putRows}
          columns={columns}
          pageSize={6}
          rowsPerPageOptions={[6]}
          sx={
            theme.name === "dark"
              ? {
                  color: "#d4af37",
                  boxShadow: 2,
                  border: 1,

                  borderColor: "#d4af37",
                  "& .MuiDataGrid-cell:hover": {
                    color: "#d4af37",
                  },
                  "& .MuiDataGrid-row:hover": {
                    background: "#595547",
                  },
                  "& .MuiDataGrid-sortIcon": {
                    color: "#d4af37",
                  },
                  "& .MuiDataGrid-menuIconButton": {
                    color: "#d4af37",
                  },
                  "& .MuiTablePagination": {
                    color: "#d4af37",
                  },
                }
              : {
                  boxShadow: 2,
                  border: 1,
                  borderColor: "#00afc9",
                  "& .MuiDataGrid-cell:hover": {
                    color: "#00afc9",
                  },
                }
          }
        />
      </DataGridContainer>
    </>
  );
};

export default DataGridDisplay;
