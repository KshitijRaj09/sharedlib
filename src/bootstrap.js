import {createRoot} from "react-dom/client";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CustomTheme from "./themeProvider/Theme";
import SharedButton from "./components/SharedButton";
import { useMediaQuery, useTheme } from "@mui/material";
export { CustomTheme, SharedButton };

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

