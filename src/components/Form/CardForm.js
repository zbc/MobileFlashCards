import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

import { Input } from "../TextInput";
import { Button } from "../Button";

import styles from "./styles";

const CardForm = ({
  onSubmit,
  questionValue,
  answerValue,
  onQuestionChangeText,
  onAnswerChangeText
}) => (
  <View style={styles.container}>
    <Input
      placeholder="Question"
      value={questionValue}
      onChangeText={text => onQuestionChangeText(text)}
    />
    <Input
      placeholder="Answer"
      value={answerValue}
      onChangeText={text => onAnswerChangeText(text)}
    />
    <Button onPress={onSubmit}>Submit</Button>
  </View>
);

CardForm.propTypes = {
  onSubmit: PropTypes.func,
  questionValue: PropTypes.string,
  answerValue: PropTypes.string,
  onQuestionChangeText: PropTypes.func,
  onAnswerChangeText: PropTypes.func
};

export default CardForm;
