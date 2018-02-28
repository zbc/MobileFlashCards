import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { List } from "react-native-elements";
import PropTypes from "prop-types";
import _ from "lodash";

import styles from "./styles";
import { ListItem } from "./index";
import { Label } from "../Text";

class ListView extends Component {
  state = {
    isEmpty: true
  };
  componentDidMount() {
    if (_.isEmpty(this.props.data)) {
      this.setState({ isEmpty: true });
    } else {
      this.setState({ isEmpty: false });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (!_.isEmpty(nextProps.data)) {
      this.setState({ isEmpty: false });
    }
  }
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
        {!this.state.isEmpty ? (
          <FlatList
            data={Object.keys(deck).reduce((result, id) => {
              result.push(deck[id]);
              return result;
            }, [])}
            keyExtractor={(item, index) => index}
            renderItem={this.renderItem}
          />
        ) : (
          <Label>Try to add new Deck</Label>
        )}
      </List>
    );
  }
}

ListView.propTypes = {
  data: PropTypes.object,
  onPress: PropTypes.func
};

export default ListView;
