import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { List } from "react-native-elements";
import PropTypes from "prop-types";

import styles from "./styles";
import { ListItem } from "./index";

class ListView extends Component {
  onPress = title => {
    this.props.onPress(title);
  };

  renderItem = ({ item, index }) => (
    <ListItem
      title={item.deck.title}
      subTitle={item.deck.questions.length}
      onPress={this.onPress}
    />
  );

  render() {
    return (
      <List containerStyle={styles.container}>
        <FlatList
          data={this.props.data}
          keyExtractor={(item, index) => item.deck.title}
          renderItem={this.renderItem}
        />
      </List>
    );
  }
}

ListView.propTypes = {
  data: PropTypes.array,
  onPress: PropTypes.func
};

export default ListView;
