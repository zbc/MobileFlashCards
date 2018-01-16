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
  $lightGray: "#EEF1F5",
  $gray: "#696969",
  $buttonColor: "#0CD38A",
  $placeholderColor: "#6d6f7c"
});

export default () => (
  <Provider store={store}>
    <Container>
      <Navigator />
    </Container>
  </Provider>
);
