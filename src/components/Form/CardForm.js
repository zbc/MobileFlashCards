import React from "react";
import { View } from "react-native";

import { Input } from "../TextInput";
import { Button } from "../Button";

import styles from "./styles";

const CardForm = () => (
  <View style={styles.container}>
    <Input placeholder="Question" />
    <Input placeholder="Answer" />
    <Button>Submit</Button>
  </View>
);

export default CardForm;
