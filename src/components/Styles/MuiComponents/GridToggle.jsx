import React, { useContext } from "react";
import { Switch, FormControlLabel } from "@material-ui/core";
import { DataGridToggleContainer } from "../styledElements";
import { ThemeContext } from "styled-components";
import { useStyles } from "../muiStyles";
//import { AiOutlineTable } from "react-icons/ai";

const GridToggle = ({ showGridData, _onClick }) => {
  const classes = useStyles();
  const theme = useContext(ThemeContext);
  return (
    <DataGridToggleContainer>
      <FormControlLabel
        control={
          <Switch
            checked={showGridData}
            className={
              theme.name === "dark"
                ? classes.gridToggleDark
                : classes.gridToggleLight
            }
            size="small"
            onClick={_onClick}
          />
        }
        label="Grid"
      />
    </DataGridToggleContainer>
  );
};

export default GridToggle;
