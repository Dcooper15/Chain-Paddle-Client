import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  buttonDark: {
    background: "linear-gradient(45deg, #d4af37 30%, #EEBC1D 90%)",
    borderColor: "#d4af37",
    border: 2,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(212, 175, 55, .5)",
    color: "#d4af37",
    margin: 1,
    size: "small",
  },
  buttonLight: {
    background: "linear-gradient(45deg, #002f36 5%, #00afc9 90%)",
    border: 2,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(0, 47, 54, .8)",
    color: "#FFF",
    margin: 1,
    size: "small",
  },
  buttonDarkUns: {
    background: "linear-gradient(45deg, #d4af37 10%, #756300 80%)",
    borderColor: "#d4af37",
    border: 2,
    borderRadius: 3,
    color: "#d4af37",
    margin: 1,
    size: "small",
  },
  buttonLightUns: {
    background: "linear-gradient(45deg, #002f36 60%, #00afc9 99%)",
    border: 2,
    borderRadius: 3,
    color: "#FFF",
    margin: 1,
    size: "small",
  },
  buttonExp: {
    borderRadius: 3,
    minWidth: "30px",
    padding: "0px 15px",
    fontSize: "12px",
    color: "#d4af37",
    margin: "0",
    marginBottom: "4px",
    size: "small",
    display: "inlineFlex",
    textAlign: "center",
    whiteSpace: "nowrap",
  },
  card: {
    position: "center",
    justifyItems: "center",
    zIndex: 0,
    marginLeft: "4%",
    marginRight: "3%",
    marginTop: "3%",
    paddingTop: "1%",
    paddingBottom: "1%",
    fontFamily: "Noto Sans,sans-serif",
    borderRadius: "15px",
    paddingLeft: "2%",
  },
  quoteCard: {
    position: "center",
    justifyItems: "center",
    zIndex: 0,
    marginLeft: "2%",
    marginRight: "2%",
    marginTop: "3%",
    marginBottom: "5%",
    paddingTop: "1%",
    paddingBottom: "1%",
    fontFamily: "Noto Sans,sans-serif",
    borderRadius: "15px",
    paddingLeft: "2%",
    paddingRight: "2%",
  },

  sliderCard: {
    position: "fixed",
    justifyItems: "center",
    zIndex: 1000,
    height: "400px",
    // marginLeft: "4%",
    // marginRight: "3%",
    // marginTop: "3%",
    // // paddingTop: "1%",
    // paddingBottom: "1%",
    fontFamily: "Noto Sans,sans-serif",
    borderRadius: "15px",
    paddingLeft: "0",
  },

  chainDark: {
    borderRadius: "5px",
    borderColor: "#d4af37",
    borderWidth: "1.5px",
    height: "1.5em",
    width: "1.5em",
  },

  chainLight: {
    borderRadius: "5px",
    borderColor: "#00afc9",
    borderWidth: "1.5px",
    height: "1.5em",
    width: "1.5em",
  },

  formControl: {
    margin: 1,

    display: "inlineFlex",
    textAlign: "center",
    whiteSpace: "nowrap",
  },

  formControlSlider: {
    display: "inlineFlex",
    textAlign: "center",
    whiteSpace: "wrap",
  },
  menuItemSlider: {
    paddingTop: "0px",
    width: "100%",
    justifyContent: "left",
  },

  label: {
    marginBottom: "0",
    paddingBottom: "0",
    marginTop: "2%",
    marginLeft: "2%",
    minWidth: 75,
    fontFamily: "Montserrat, sans-serif",
  },

  menuItem: {
    paddingTop: "0px",
    width: "100%",
    justifyContent: "center",
  },

  select: {
    minWidth: "40px",
    paddingTop: "0px",
    "& .MuiSvgIcon-root": {
      color: "#d4af37",
    },
  },

  valueLabelDark: {
    "& > span": {
      fontSize: "16px",
      backgroundColor: "#342F01",
      paddingTop: "6px",
    },
  },
  valueLabel: {
    "& > span": {
      //color: "#342F01",
      fontSize: "16px",
      backgroundColor: "#146175",
      padding: "6px",
    },
  },

  twitterStwitsLabel: {
    width: "100px",
    paddingTop: "0px",
    "& .MuiSvgIcon-root": {
      color: "#d4af37",
    },
  },

  twitterStwitsSelect: {
    width: "100%",
    paddingTop: "0px",
    "& .MuiSvgIcon-root": {
      color: "#d4af37",
    },
  },
  twitterStwitsSelectInactive: {
    width: "215px",
    paddingTop: "0px",
    "& .MuiSvgIcon-root": {
      color: "#d4af37",
    },
  },

  //WSB Buttons
  wsbButtonDark: {
    background: "linear-gradient(45deg, #EEBC1D 10%, #474747 95%)",
    borderColor: "#d4af37",
    border: 2,
    borderRadius: 3,
    //boxShadow: "0 3px 5px 2px rgba(212, 175, 55, .5)",
    color: "#fff",
    margin: 1,
    marginBottom: "3%",
    fontSize: "10px",
    "@media (min-width: 800px)": {
      fontSize: "16px",
    },
  },
  wsbButtonLight: {
    background: "linear-gradient(45deg, #00afc9 5%, #002f36 99%)",
    border: 2,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(0, 47, 54, .8)",
    color: "#F8E4A5",
    margin: 1,
    marginBottom: "3%",
    fontSize: "10px",
    "@media (min-width: 800px)": {
      fontSize: "16px",
    },
  },
  wsbButtonDarkUns: {
    //background: "linear-gradient(45deg, #d4af37 10%, #756300 80%)",
    borderColor: "#d4af37",
    border: 2,
    borderRadius: 3,
    color: "#d4af37",
    margin: 1,
    marginBottom: "3%",
    fontSize: "10px",
    "@media (min-width: 800px)": {
      fontSize: "16px",
    },
  },
  wsbButtonLightUns: {
    // background: "linear-gradient(45deg, #002f36 60%, #00afc9 99%)",
    border: 2,
    borderRadius: 3,
    color: "#146175",
    margin: 1,
    marginBottom: "3%",
    fontSize: "10px",
    "@media (min-width: 800px)": {
      fontSize: "16px",
    },
  },

  //More Data

  moreDataButtonDark: {
    //background: "linear-gradient(45deg, #d4af37 30%, #EEBC1D 90%)",
    color: "#d4af37",
    margin: "1%",
    size: "small",
    border: "1px solid #d4af37",
    borderRadius: 7,
  },
  moreDataButtonDarkActive: {
    background: "linear-gradient(45deg, #d4af37 30%, #EEBC1D 90%)",
    color: "#fff",
    margin: "1%",
    size: "small",
    border: "1px solid #d4af37",
    borderRadius: 7,
  },

  moreDataButtonLight: {
    //background: "linear-gradient(45deg, #d4af37 30%, #EEBC1D 90%)",
    color: "#146175",
    margin: "1%",
    size: "small",
    border: "1px solid #146175",
    borderRadius: 7,
  },
  moreDataButtonLightActive: {
    background: "linear-gradient(45deg, #00afc9 5%, #002f36 99%)",
    color: "#F8E4A5",
    margin: "1%",
    size: "small",
    // border: "1px solid #00afc9",
    boxShadow: "0 3px 5px 2px rgba(0, 47, 54, .8)",
    borderRadius: 7,
  },
  signUpButtonDark: {
    borderColor: "#d4af37",
    color: "#d4af37",
    margin: "auto",
    justifyContent: "center",
    fontSize: "22px",
    textAlign: "center",
    display: "grid",
  },
  signUpButtonLight: {
    borderColor: "#146175",
    color: "#00afc9",
    margin: "auto",
    justifyContent: "center",
    fontSize: "22px",
    textAlign: "center",
    display: "grid",
  },
  navSignUpButtonDark: {
    //background: "linear-gradient(45deg, #d4af37 30%, #EEBC1D 90%)",
    borderColor: "#d4af37",
    //border: 2,
    //borderRadius: 3,
    //boxShadow: "0 3px 5px 2px rgba(212, 175, 55, .5)",
    color: "#d4af37",
    margin: "auto",
    justifyContent: "center",
    fontSize: "12px",
    textAlign: "center",
    display: "grid",
  },

  dataDisplayButtonLight: {
    color: "#146175",
    marginLeft: "2%",
    marginTop: "3%",
    size: "small",
    border: "1px solid #146175",
    borderRadius: 7,
  },
  dataDisplayButtonDark: {
    color: "#d4af37",
    marginLeft: "2%",
    marginTop: "3%",
    size: "small",
    border: "1px solid #d4af37",
    borderRadius: 7,
  },
  gridToggleDark: {
    color: "#d4af37",

    "& .MuiSwitch-switchBase": {
      color: "#d4af37",
      "&.Mui-checked + .MuiSwitch-track": {
        backgroundColor: "#d4af37",
      },
    },
    "&.Mui-checked": {
      backgroundColor: "#d4af37",
    },
    
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: "#8796A5",
      borderRadius: 20 / 2,
    },
  },
  gridToggleLight: {
    color: "fff",
    "& .MuiSwitch-switchBase": {
      color: "#00afc9",
      "&.Mui-checked + .MuiSwitch-track": {
        backgroundColor: "#00afc9",
      },
    },
    "&.Mui-checked": {
      backgroundColor: "#00afc9",
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: "#146175",
      borderRadius: 20 / 2,
    },
  },
});
