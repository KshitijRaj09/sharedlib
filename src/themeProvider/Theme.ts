import React from 'react';
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
   status: {
      danger: "",
   },
   applicationBackgroundColor: "#ECF2FF",
   createPostBackgroundColor: "#E3DFFD",

   breakpoints: {
      values: {
         mobile: 0,
         tablet: 700,
         laptop: 1300,
         largeScreen: 1600,
      },
   },
});

export default theme;