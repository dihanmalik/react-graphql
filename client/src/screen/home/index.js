import React from "react";
import { useTheme } from "emotion-theming";

export default () => {
  const { palette } = useTheme();
  return (
    <h1 style={{ backgroundColor: palette.primary.light }}>Hello GraphQL</h1>
  );
};
