import React from "react";
import RouterProvider from "./RouterProvider";
import { ThemeProvider } from "../theming";

export default ({ children }) => (
  <RouterProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </RouterProvider>
);
