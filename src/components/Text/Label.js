import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const Label = ({ children }) => (
  <View style={styles.labelContainer}>
    <Text style={styles.label}>{children}</Text>
  </View>
);

Label.propTypes = {
  children: PropTypes.node
};

export default Label;
