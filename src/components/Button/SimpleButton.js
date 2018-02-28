import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const SimpleButton = ({ children, onPress }) => (
  <TouchableOpacity style={styles.simpleContainer} onPress={onPress}>
    <View style={styles.simpleButton}>
      <Text style={styles.simpleText}>{children}</Text>
    </View>
  </TouchableOpacity>
);

SimpleButton.propTypes = {
  children: PropTypes.string,
  onPress: PropTypes.func
};

export default SimpleButton;
