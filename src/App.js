import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  lightTheme,
  darkTheme,
  GlobalBackGround,
} from "./components/Styles/theme";
import { useAuth0 } from "@auth0/auth0-react";
import BasicNav from "./components/HomePage/BasicNav";
import Routes from "./components/HomePage/Routes";
import MainNavigation from "./components/HomePage/Navigation/MainNavigation";
import SignupHome from "./components/Signup/SignupHome";
//import TestConnection from "./components/TestServer/TestConnect";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");
  const { isAuthenticated } = useAuth0();
  const lightDarkChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalBackGround />
      {isAuthenticated ? (
        <>
          <BasicNav lightDarkChange={lightDarkChange} />
          <MainNavigation />
          <Routes />
        </>
      ) : (
        <SignupHome lightDarkChange={lightDarkChange}/>
      )}
    </ThemeProvider>
  );
}

export default App;
