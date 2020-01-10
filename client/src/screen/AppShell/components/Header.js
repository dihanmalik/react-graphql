import AppBar from "@material-ui/core/AppBar";
import BaseMenuIcon from "@material-ui/icons/Menu";
import React from "react";
import View from "@atom/View";
import styled from "@styler";

const Container = styled.header(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: 54,
  boxShadow: theme.shadows[1],
  zIndex: theme.zIndex.appBar,
  display: "flex",
  alignItems: "center",
  flexDirection: "row-reverse",
  padding: "0px 15px"
}));

const MenuIcon = styled(BaseMenuIcon)({
  color: "white"
});

export default () => (
  <AppBar position={"sticky"}>
    <Container>
      <View></View>
    </Container>
  </AppBar>
);
