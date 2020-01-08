import React from "react";
import { useTheme } from "emotion-theming";

export default () => {
  const theme = useTheme();
  return (
    <h1 style={{ backgroundColor: theme.primary.light }}>Hello GraphQL</h1>
  );
};
