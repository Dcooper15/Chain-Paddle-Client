import React, { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import { StyledMenuItem } from "../styledElements";
import { InputLabel, Select, MenuItem, FormControl } from "@material-ui/core";
import { useStyles } from "../muiStyles";

const MuiDropdown = ({
  menuItemValues,
  inputLabelId,
  inputLabel,
  selectLabelId,
  selectId,
  onChange,
  value,
  labelFiller,
}) => {
  const classes = useStyles();
  const theme = useContext(ThemeContext);

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id={inputLabelId} className={classes.twitterStwitsLabel}>
        <strong
          style={{ color: theme.name === "dark" ? "#d4af37" : "#146175" }}
        >
          {inputLabel}
        </strong>
      </InputLabel>

      <Select
        labelId={selectLabelId}
        id={selectId}
        className={
          open === true || value !== null
            ? classes.dropDownSelect
            : classes.dropDownSelectInactive
        }
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={value === null ? "" : value}
        onChange={onChange}
      >
        {menuItemValues.map((value) => (
          <MenuItem className={classes.menuItem} value={value}>
            <StyledMenuItem>
              {value} {labelFiller}
            </StyledMenuItem>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MuiDropdown;
