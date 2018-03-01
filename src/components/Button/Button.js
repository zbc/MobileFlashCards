import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const Button = ({
  children,
  onPress,
  backgroundColor = "#0CD38A",
  disabled
}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={onPress}
    disabled={disabled}
  >
    <View
      style={[
        styles.button,
        { backgroundColor: disabled ? "#D3D3D3" : backgroundColor }
      ]}
    >
      <Text style={styles.text}>{children}</Text>
    </View>
  </TouchableOpacity>
);

Button.propTypes = {
  children: PropTypes.string,
  onPress: PropTypes.func
};

export default Button;
