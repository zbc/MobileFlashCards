import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { List } from "react-native-elements";
import PropTypes from "prop-types";

import styles from "./styles";
import { ListItem } from "./index";

class ListView extends Component {
  onPress = (title, subTitle) => {
    this.props.onPress(title, subTitle);
  };

  renderItem = ({ item }) => {
    // console.log(item);
    return (
      <ListItem
        title={item.title}
        subTitle={item.questions.length}
        onPress={this.onPress}
      />
    );
  };

  render() {
    const deck = this.props.data;
    return (
      <List containerStyle={styles.container}>
        <FlatList
          data={Object.keys(deck).reduce((result, id) => {
            result.push(deck[id]);
            return result;
          }, [])}
          keyExtractor={(item, index) => index}
          renderItem={this.renderItem}
        />
      </List>
    );
  }
}

ListView.propTypes = {
  data: PropTypes.object,
  onPress: PropTypes.func
};

export default ListView;
