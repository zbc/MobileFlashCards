import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const Button = ({ children, onPress, backgroundColor = "#0CD38A" }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={[styles.button, { backgroundColor }]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  </TouchableOpacity>
);

Button.propTypes = {
  children: PropTypes.string,
  onPress: PropTypes.func
};

export default Button;
