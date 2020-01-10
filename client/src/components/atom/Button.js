import styled from "@styler";

export default styled.button(({ theme, variant, shade = "main" }) => ({
  height: 46,
  outline: 0,
  border: "none",
  cursor: "pointer",
  backgroundColor: variant ? theme.palette[variant][shade] : undefined,
  color: variant ? theme.palette[variant].contrastText : undefined,
  transition: `background-color 300ms ${theme.transitions.easing.easeInOut}`,
  ":hover": {
    backgroundColor: theme.palette.grey[300]
  },
  fontSize: 14,
  display: "flex",
  flexDirection: "row",
  padding: "0px 10px",
  borderRadius: 3,
  boxShadow: theme.shadows[3],
  minWidth: 100,
  justifyContent: "center"
}));
