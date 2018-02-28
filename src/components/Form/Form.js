import React from "react";
import { View, Text, TextInput } from "react-native";
import PropTypes from "prop-types";

import { Button } from "../Button";
import { Input } from "../TextInput";
import styles from "./styles";

const Form = ({ onSubmit, onChangeText, value }) => (
  <View style={styles.container}>
    <Text style={styles.text}>What is the title of your new Deck?</Text>
    <Input
      placeholder="Deck Name"
      onChangeText={text => onChangeText(text)}
      value={value}
    />
    <Button onPress={onSubmit}>Submit</Button>
  </View>
);

Form.propTypes = {
  onSubmit: PropTypes.func,
  onChangeText: PropTypes.func,
  value: PropTypes.any
};

export default Form;
