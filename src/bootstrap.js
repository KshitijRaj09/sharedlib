import { createRoot } from "react-dom/client";
import React from 'react';
import { ThemeProvider } from "@mui/material";
import SharedButton from './components/SharedButton';
import { customTheme } from "./themeProvider";
const Main = () => {
   return (<>
     <SharedButton text='test'/> 
   </>)
}


// Render your React component instead

   const root = createRoot(document.getElementById("theme-app"));
   root.render(
      <ThemeProvider theme={customTheme}>
         <Main />
      </ThemeProvider>
   );