import ApolloProvider from "./ApolloProvider";
import React from "react";
import RouterProvider from "./RouterProvider";
import { ThemeProvider } from "../theming";

export default ({ children }) => (
  <ApolloProvider>
    <RouterProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </RouterProvider>
  </ApolloProvider>
);
