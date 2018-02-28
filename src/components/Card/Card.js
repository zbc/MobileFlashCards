import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const Card = ({ questions, index, flip }) => (
  <View style={styles.container}>
    {flip ? (
      <Text style={styles.text}>{questions[index - 1].answer}</Text>
    ) : (
      <Text style={styles.text}>{questions[index - 1].question}</Text>
    )}
  </View>
);

Card.propTypes = {
  questions: PropTypes.array,
  index: PropTypes.number,
  flip: PropTypes.bool
};

export default Card;
