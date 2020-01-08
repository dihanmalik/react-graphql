import { ThemeProvider as BaseThemeProvider } from "emotion-theming";
import React from "react";

export const theme = {
  primary: {
    light: "#7986cb",
    main: "#3f51b5",
    dark: "#303f9f",
    contrastText: "#fff"
  },
  secondary: {
    light: "#ff4081",
    main: "#f50057",
    dark: "#c51162",
    contrastText: "#fff"
  },
  background: {
    light: "#fff",
    main: "#f5f5f5",
    dark: "#e0e0e0"
  },
  accent: "#00bcd4",
  common: {
    white: "#fff",
    black: "#212121",
    error: "#ff1744"
  }
};

export const ThemeProvider = ({ children }) => (
  <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>
);
