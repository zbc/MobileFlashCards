import React from "react";
import { StatusBar, View } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const Container = ({ children }) => (
  <View style={styles.container}>
    <StatusBar />
    {children}
  </View>
);

Container.propTypes = {
  children: PropTypes.node
};

export default Container;
