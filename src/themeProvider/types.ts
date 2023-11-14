import { Theme } from "@mui/material";

export interface BreakpointOverrides {
   xs: false; // removes the `xs` breakpoint
   sm: false;
   md: false;
   lg: false;
   xl: false;
   mobile: true; // adds the `mobile` breakpoint
   tablet: true;
   laptop: true;
   largeScreen: true;
}
// allow configuration using `createTheme`
export interface ThemeOptions {
   status?: {
       danger?: string;
   };
   applicationBackgroundColor: string,
   createPostBackgroundColor: string,
}

export type customThemeType = Theme & BreakpointOverrides & ThemeOptions;