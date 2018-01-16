import React from "react";
import { View, Text, TextInput } from "react-native";

import { Button } from "../Button";
import { Input } from "../TextInput";
import styles from "./styles";

const Form = () => (
  <View style={styles.container}>
    <Text style={styles.text}>What is the title of your new Deck?</Text>
    <Input placeholder="Deck Name" />
    <Button>Submit</Button>
  </View>
);

export default Form;
