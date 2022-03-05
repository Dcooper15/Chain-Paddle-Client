import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  lightTheme,
  darkTheme,
  GlobalBackGround,
} from "./components/Styles/theme";
import {
  SectorContainer,
  IntroContainer,
} from "./components/Styles/styledElements";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BasicNav from "./components/HomePage/BasicNav";
import Routes from "./components/HomePage/Routes";
import MainMenu from "./components/HomePage/MainMenu";
import TestConnection from "./components/TestServer/TestConnect";
import NavBar from "./components/auth/nav-bar";
import SignupHome from "./components/Signup/SignupHome";
//import MainSearch from "./components/MainSearch";
//import MyWatchList from "./components/HomePage/MyWatchList";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");

  const lightDarkChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalBackGround />

      <Router>
        <BasicNav theme={theme} lightDarkChange={lightDarkChange} />

        <Route exact path="/">
          {/* <SignupHome /> */}
          <TestConnection />
          <IntroContainer>
            All initial option data is set to the underlying's nearest
            expiration and is one strike out of the money. Select any ticker
            symbol to open the underlying's full option chain.
          </IntroContainer>
          <SectorContainer>
            <MainMenu />

            {/* <MainSearch />  */}
            {/* <MyWatchList /> */}
          </SectorContainer>
          <br></br>
        </Route>
        <Routes theme={theme} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
