import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { AddToWatchListContainer } from "../Styles/styledElements";
//import { useStyles } from "../Styles/muiStyles";

import { BsPlusCircle } from "react-icons/bs";
import axios from "axios";

const AddToWatchlist = ({ contractType, symbol, strike, toFromDate }) => {
  //const classes = useStyles();

  const { user } = useAuth0();
  const loggedInUser = user;

  const optionToAdd = {
    contract_type: contractType,
    symbol: symbol,
    strike: strike,
    to_from_date: toFromDate,
    user_id: loggedInUser.sub,
  };

  const handleSubmitAddToWatchlist = (e) => {
    e.preventDefault();

    axios.post(
      `${process.env.REACT_APP_SERVER_ROUTE}/watchlist/create`,
      optionToAdd
    );
  };

  return (
    <AddToWatchListContainer>
      <BsPlusCircle onClick={handleSubmitAddToWatchlist} />
    </AddToWatchListContainer>
  );
};

export default AddToWatchlist;
