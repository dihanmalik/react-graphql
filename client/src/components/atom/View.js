import styled from "@styler";

export default styled.div(
  ({ flex, row, reverse }) => ({
    display: "flex",
    flexDirection: `${row ? "row" : "column"}${reverse ? "-reverse" : ""}`,
    flex
  }),
  ({ justify, align }) => ({
    justifyContent: justify,
    alignItems: align
  }),
  ({ wrap, fluid }) => ({
    flexWrap: wrap ? "wrap" : undefined
  }),
  ({ fluid }) => ({
    width: fluid ? "100%" : undefined
  })
);
