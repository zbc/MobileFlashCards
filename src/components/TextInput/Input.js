import React from "react";
import { TextInput } from "react-native";

import styles from "./styles";

const Input = props => (
  <TextInput
    style={styles.container}
    autoCapitalize="none"
    autoCorrect={false}
    placeholderTextColor="#6d6f7c"
    {...props}
  />
);

export default Input;
