import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  useRecoilState,
  //useRecoilValue
} from "recoil";
import { addedWatchlistOptionsState } from "../../recoil/atoms/globalState";
import { AddToWatchListContainer } from "../Styles/styledElements";
//import { useStyles } from "../Styles/muiStyles";

import { BsPlusCircle } from "react-icons/bs";
import axios from "axios";

const AddToWatchlist = ({
  contractType,
  symbol,
  strike,
  toFromDate,
  optionDescription,
}) => {
  //const classes = useStyles();
  const [optionAdded, setOptionAdded] = useState(false);
  const [optionsInWatchlist, setOptionsInWatchlist] = useRecoilState(
    addedWatchlistOptionsState
  );

  const { user } = useAuth0();
  const loggedInUser = user;

  const optionToAdd = {
    contract_type: contractType,
    symbol: symbol,
    strike: strike,
    to_from_date: toFromDate,
    user_id: loggedInUser.sub,
    option_description: optionDescription,
  };

  const handleSubmitAddToWatchlist = (e) => {
    e.preventDefault();
    setOptionAdded(true);

    axios
      .post(
        `${process.env.REACT_APP_SERVER_ROUTE}/watchlist/create`,
        optionToAdd
      )
      .then(setOptionsInWatchlist(optionDescription, ...optionsInWatchlist));
  };

  return (
    <AddToWatchListContainer>
      {optionAdded === true ? (
        "Added to watchlist"
      ) : optionsInWatchlist?.includes(optionDescription) ? (
        "Added to watchlist"
      ) : (
        <BsPlusCircle
          onClick={handleSubmitAddToWatchlist}
          style={{ cursor: "pointer" }}
        />
      )}
    </AddToWatchListContainer>
  );
};

export default AddToWatchlist;
