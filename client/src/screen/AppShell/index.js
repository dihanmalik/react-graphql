import Drawer from "./components/Drawer";
import Header from "./components/Header";
import React from "react";
import View from "@atom/View";
import styled from "@styler";

const Content = styled(View)(({ theme }) => ({
  backgroundColor: theme.palette.background.default
}));

export default ({ children }) => (
  <View row>
    <Drawer />
    <Content flex={1}>
      <Header />
      {children}
    </Content>
  </View>
);
