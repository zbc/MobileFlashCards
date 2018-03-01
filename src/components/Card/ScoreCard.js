import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

import { Button } from "../Button";

import styles from "./styles";

const ScoreCard = ({ score, onPressStartOver, onPressBack }) => (
  <View style={styles.scoreContainer}>
    <View style={styles.container}>
      <Text style={styles.text}>Score: {score}%</Text>
    </View>
    <Button onPress={onPressStartOver}>Restart Quiz</Button>
    <Button onPress={onPressBack}>Back To Deck</Button>
  </View>
);

ScoreCard.propTypes = {
  score: PropTypes.number,
  onPressStartOver: PropTypes.func,
  onPressBack: PropTypes.func
};

export default ScoreCard;
