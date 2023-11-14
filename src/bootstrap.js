import {createRoot} from "react-dom/client";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CustomTheme from "./themeProvider/Theme";
import SharedButton from "./components/SharedButton";
import WindowEvents from "./eventservice/eventservice";
export { WindowEvents, CustomTheme, SharedButton };

const Main = () => {
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

