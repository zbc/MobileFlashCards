import React from "react";
import { TextInput, KeyboardAvoidingView } from "react-native";

import styles from "./styles";

const Input = props => (
  <KeyboardAvoidingView behavior="padding">
    <TextInput
      style={styles.container}
      autoCapitalize="none"
      autoCorrect={false}
      placeholderTextColor="#6d6f7c"
      {...props}
    />
  </KeyboardAvoidingView>
);

export default Input;
