import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const TextWithSubtitle = ({ title, subTitle }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subTitle}>{subTitle} cards</Text>
  </View>
);

export default TextWithSubtitle;
