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
    marginBottom: "3%",
    marginLeft: "2%",
    marginRight: "2%",
    marginTop: "3%",
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
      color: "#4169e1",
      fontSize: "16px",
      backgroundColor: "#adadad",
      paddingTop: "6px",
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
    marginBottom: '3%',
    fontSize: '10px',
    '@media (min-width: 800px)' : {
      fontSize: '16px',
    }
   
  },
  wsbButtonLight: {
    background: "linear-gradient(45deg, #00afc9 5%, #002f36 99%)",
    border: 2,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(0, 47, 54, .8)",
    color: "#F8E4A5",
    margin: 1,
    marginBottom: '3%',
    fontSize: '10px',
    '@media (min-width: 800px)' : {
      fontSize: '16px',
    }
  },
  wsbButtonDarkUns: {
    //background: "linear-gradient(45deg, #d4af37 10%, #756300 80%)",
    borderColor: "#d4af37",
    border: 2,
    borderRadius: 3,
    color: "#d4af37",
    margin: 1,
    marginBottom: '3%',
    fontSize: '10px',
    '@media (min-width: 800px)' : {
      fontSize: '16px',
    }
  },
  wsbButtonLightUns: {
   // background: "linear-gradient(45deg, #002f36 60%, #00afc9 99%)",
    border: 2,
    borderRadius: 3,
    color: "#146175",
    margin: 1,
    marginBottom: '3%',
    fontSize: '10px',
    '@media (min-width: 800px)' : {
      fontSize: '16px',
    }
  },

  //More Data

  moreDataButtonDark: {
    //background: "linear-gradient(45deg, #d4af37 30%, #EEBC1D 90%)",
    color: "#d4af37",
    margin: 1,
    size: "small",
    border: "1px solid #d4af37",
    borderRadius: 7
  },

});
