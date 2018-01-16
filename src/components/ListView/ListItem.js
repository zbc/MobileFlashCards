import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const ListItem = ({ title, subTitle, onPress }) => (
  <TouchableOpacity onPress={() => onPress(title, subTitle)}>
    <View style={styles.listItemContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle} cards</Text>
    </View>
  </TouchableOpacity>
);

ListItem.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.number,
  onPress: PropTypes.func
};

export default ListItem;
