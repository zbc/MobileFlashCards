import React from "react";
import { Text, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { Provider } from "react-redux";

import store from "./config/store";
import Navigator from "./config/routes";
import { Container } from "./components/Container";

EStyleSheet.build({
  $white: "#ffffff",
  $black: "#000000",
  $darkGray: "#2a2a2a",
  $gray: "#696969"
});

export default () => (
  <Provider store={store}>
    <Container>
      <Navigator />
    </Container>
  </Provider>
);
