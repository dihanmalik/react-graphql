import React from "react";
import styled from "@styler";

const textConstructor = variant => {
  switch (variant) {
    case "h1":
      return styled.h1;
    case "h2":
      return styled.h2;
    case "h3":
      return styled.h3;
    case "h4":
      return styled.h4;
    case "h5":
      return styled.h5;
    case "h6":
      return styled.h6;
    default:
      return styled.p;
  }
};

export default ({ variant = "body1", ...props }) => {
  const TextElement = textConstructor(variant)(({ theme }) => ({
    ...theme.typography[variant],
    margin: 0
  }));
  return <TextElement {...props} />;
};
