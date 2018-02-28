import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const TextWithIndex = ({ index, total }) => (
  <Text style={styles.textIndex}>
    {index}/{total}
  </Text>
);

TextWithIndex.propTypes = {
  index: PropTypes.number,
  total: PropTypes.number
};

export default TextWithIndex;
