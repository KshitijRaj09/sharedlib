import {createRoot} from "react-dom/client";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CustomTheme from "./themeProvider/Theme";
import SharedButton from "./components/SharedButton";
import { useMediaQuery, useTheme } from "@mui/material";
import { WindowEventService, UserInfoType, WindowEvents } from './eventservice/index';
export { CustomTheme, SharedButton, WindowEventService, UserInfoType, WindowEvents };

const Main = () => {
   const theme = useTheme();
   const isMobileScreen = useMediaQuery(theme.breakpoints.down('tablet'));
   console.log(isMobileScreen);
   return (<>
     <SharedButton /> 
   </>)
}


// Render your React component instead
console.log('theme-provider loaded');
const root = createRoot(document.getElementById("theme-app"));
root.render(
   <ThemeProvider theme={CustomTheme}>
      <Main />
   </ThemeProvider>
);

