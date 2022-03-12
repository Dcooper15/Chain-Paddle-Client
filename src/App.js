import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  lightTheme,
  darkTheme,
  GlobalBackGround,
} from "./components/Styles/theme";
import BasicNav from "./components/HomePage/BasicNav";
import Routes from "./components/HomePage/Routes";
import MainNavigation from "./components/HomePage/Navigation/MainNavigation";
//import TestConnection from "./components/TestServer/TestConnect";

import "./App.css";

function App() {
  const [theme, setTheme] = useState('dark');

  const lightDarkChange = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalBackGround />
      <BasicNav lightDarkChange={lightDarkChange} />
      <MainNavigation />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
